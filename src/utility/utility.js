export const searchFtn = (array, term) => {
  if (!term) return array;
  const lowerTerm = term.toLowerCase();
  return array.filter(order => 
    order.id.toLowerCase().includes(lowerTerm) ||
    order.user.name.toLowerCase().includes(lowerTerm) ||
    order.project.toLowerCase().includes(lowerTerm) ||
    order.address.toLowerCase().includes(lowerTerm) ||
    order.status.toLowerCase().includes(lowerTerm)
  );
};



export function sortFtn(dataToSort, column, direction = 'asc') {
  const sortedData = [...dataToSort].sort((a, b) => {
    let aValue = a;
    let bValue = b;

   column.split('.').forEach(key => {
      aValue = aValue?.[key];
      bValue = bValue?.[key];
    });

    aValue = aValue?.toString().toLowerCase() ?? '';
    bValue = bValue?.toString().toLowerCase() ?? '';

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  return sortedData;
}