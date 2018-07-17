Using Models:

1. Write a script (stand-alone `save-companies.js` file) that:
    1. Saves a few company
        * Using `new Company(data)`
        * Using `Company.create(data)`
    1 Updates a company using `$set` on one validated field
        * Try without, then with `{ new: true, runValidators: true }`
1. Write a script (stand-alone `get-companies.js` file) that does a "search" and log results.
Use `.lean()` to get pure POJO responses. Try these:
    1. Find companies using `find`
    1. Find companies using `where`
    * Try `findOne`
    * Play with `.select('fields')`