const sort = (results, queryString) => {
  if (queryString.order_by) {
    const fields = queryString.order_by.split(' ');
    if (fields[1] === 'asc') {
      results.sort(function (x, y) {
        results = x.fields[0] - y.fields[0];
      });
    } else {
      results.sort(function (x, y) {
        results = y.fields[0] - x.fields[0];
      });
    }
    return results;
  } else {
    return results;
  }
};

const filter = (results, queryString) => {
  const queryObject = { ...queryString };
  const excludedFields = ['limit', 'order_by', 'page'];
  excludedFields.forEach((e) => delete queryObject(e));

  if (queryObject.t_c) {
    if (queryObject.t_c === 'dy') {
      const new_result = results.filter((result) => Date.now() - Date.parse(result.created_at) === 24 * 60 * 60 * 1000);
      return new_result;
    } else if (queryObject.t_c === 'wk') {
      const new_result = results.filter(
        (result) => Date.now() - Date.parse(result.created_at) === 7 * 24 * 60 * 60 * 1000
      );
      return new_result;
    } else if (queryObject.t_c === 'mt') {
      const new_result = results.filter(
        (result) => Date.now() - Date.parse(result.created_at) === 30 * 7 * 24 * 60 * 60 * 1000
      );
      return new_result;
    } else {
      return results;
    }
  }
};

const paginate = (results, queryString) => {
  const page = parseInt(queryString.page) || 1;
  const limit = parseInt(queryString.limit) || 10;
  const skip = (page - 1) * limit;
  let resultCount = results.length;
  let noOfPages = Math.ceil(resultCount / limit);
  results = results.slice(skip, skip + limit);
  return {
    page: page,
    limit: limit,
    no_of_pages: noOfPages,
    result: results,
  };
};

export { sort, paginate, filter };
