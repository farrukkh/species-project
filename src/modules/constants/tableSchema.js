const columns = [
  {
    headerName: 'Taxonomy ID',
    field: 'taxonid',
    width: 100,
    headerClass: 'info-header',
    cellClass: 'info-cell',
  },
  {
    headerName: 'Scientific Name',
    field: 'scientific_name',
    width: 150,
    headerClass: 'info-header',
    cellClass: 'info-cell',
  },
  {
    headerName: 'Category',
    field: 'category',
    width: 100,
    headerClass: 'info-header',
    cellClass: 'info-cell',
  },
  {
    headerName: 'Class Name',
    field: 'class_name',
    width: 100,
  },
  {
    headerName: 'Family Name',
    field: 'family_name',
    width: 100,
  },
  {
    headerName: 'Genus Name',
    field: 'genus_name',
    width: 100,
  },
  {
    headerName: 'Kingdom Name',
    field: 'kingdom_name',
    width: 150,
  },
  {
    headerName: 'Order Name',
    field: 'order_name',
    width: 100,
  },
  {
    headerName: 'Phylum Name',
    field: 'phylum_name',
    width: 150,
  },
  {
    headerName: 'Conservation Measures',
    field: 'text',
    width: 200,
  },
];

const rows = {
  taxonid: 1,
  scientific_name: '',
  category: '',
  class_name: '',
  family_name: '',
  genus_name: '',
  kingdom_name: '',
  order_name: '',
  phylum_name: '',
  text: '',
};

export default ({
  columns,
  rows,
});
