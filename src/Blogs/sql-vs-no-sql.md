# SQL or not to SQL

## I'm going to make a quick, concise list of pros and cons and when to use which one.

> One thing to keep in mind is that either one can be used as the back end of graphql resolver... this won't effect your ability to use new stacks.

### SQL

#### Quick Definition: This is a rational database of some kind. This is useful for holding a lot of data in a very organized way. This is helpful when you want be able to manipulate the data directly on the back side with some tool, SQL management studio or SQLite Browser.

\+ Structured Data

\+ Holds a lot of data that can be organized and kept normalized

\+ Can be easily manipulated and validated on the backend

\- Can be harder to setup initially, depending on the flavor

\- If using an API endpoint like a node server, there may be more manipulation as the data is not in a structure similar to a javascript object

### No-SQL

#### Some of the main players include MariaDB and MongoDB. These allow you to store information similar to a JSON File, with just key: value pairs. This offers a lot of flexibility to but does not give much structure to your data.

\+ Easy to setup on many cloud or even on a docker container.

\+ structure closely matches the javascript object needed in your project

\- unstructured which can make it harder to organize and keep validated.

\- Does not work well for larger projects with many different data points.
