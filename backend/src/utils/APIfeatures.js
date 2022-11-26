const sort = (result, queryString) => {
    if (queryString.orderBy) {
        const fields = queryString.orderBy.split(" ");
        if (fields[1] === "asc") {
            result.sort(function(x, y){
                result =  x.field[0] - y.field[0];
            });
        } else {
            result.sort(function(x, y){
                result =  y.field[0] - x.field[0];
            });
        }
        return result;
    }
};

const paginate =  (result, queryString) => {
    const page = parseInt(queryString.page) || 1;
    const limit = parseInt(queryString.limit) || 10;
    const skip = (page-1) * limit;
    let resultCount = result.length;
    let noOfPages = Math.ceil(resultCount/limit);
    result = result.slice(skip, skip+limit);
    return {
        page: page,
        limit: limit,
        no_of_pages: noOfPages,
        result: result
    };
};

export { sort, paginate };

