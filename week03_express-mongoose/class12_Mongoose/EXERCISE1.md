## Schema

* Company
    * `name` - String
    * `description` - String
    * `type` - String
    * `address`
        * `street` - String
        * `city` - String
        * `zip` - String
        * `state` - String
    * `size` - Number
    * ~~`founded` - Date~~
    * `isHip` - Boolean
    * `keywords` - Array of Strings

1. Write Test
    * Create data with all required fields and pass to model
    checking that `.toJSON()` gives back all fields
1. Model
    1. Write Schema
    1. Export Model (give singular name `'Company'`)
1. Profit!