import { buildFiltersUrl } from '@utils/buildFiltersUrl';

describe('buildFiltersUrl', () => {
  test('should return a string with all filters data', () => {
    const filtersData = [
      {
        id: 'brand',
        name: 'Marca',
        values: [{ id: 'apple', name: 'Apple' }],
      },
      {
        id: 'price',
        name: 'Precio',
        values: [{ id: 'range1', name: '$100 - $200'},
        ],
      },
    ];

    const expectedUrl = '&brand=apple&price=range1';

    expect(buildFiltersUrl(filtersData)).toEqual(expectedUrl);
  });

  test('should return an empty string when no filters data is provided', () => {
    expect(buildFiltersUrl([])).toEqual('');
  });
});
