import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';

import tableSchema from '../../modules/constants/tableSchema';

import './style.scss';

const generateRows = (data, rowSchema) => {
  if (!data) return [];
  return data
    .map((row) => {
      const nthRow = { ...rowSchema };
      Object
        .keys(rowSchema)
        .forEach((key) => {
          switch (key) {
            case 'date':
              nthRow[key] = row.date;
              break;
            case 'country':
              nthRow[key] = row.country;
              break;
            default:
              nthRow[key] = row[key];
          }
        });
      return nthRow;
    });
};

const SpeciesTable = (props) => {
  const { species } = props;

  const { rows, columns } = tableSchema;

  const rowData = useMemo(
    () => generateRows(species, rows),
    [species, rows],
  );

  const autoSizeColumns = ({ columnApi }) => {
    const colIds = columnApi
      .getAllDisplayedColumns()
      .map((col) => col.getColId());
    columnApi.autoSizeColumns(colIds);
  };

  return (
    <div
      className="ag-theme-balham aggrid--table"
    >
    <AgGridReact
        defaultColDef={{
          sortable: true,
          resizable: true,
        }}
        rowData={rowData}
        onFirstDataRendered={autoSizeColumns}
        columnDefs={columns}
      />
    </div>
  )
};

export default SpeciesTable;
