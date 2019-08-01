# Responsible api tests

## What we will cover

- Endpoint versions
- How to write API tests

## Notes

When we build API's something we always have to remember is how changes effect our customers.

It is easy to forget that a decision made today can not so easily be changed later.

We call these changes "breaking changes" and what it means is that you updated the api so it is
no longer consistent with how it used to work.

In order to mitigate this problem we need to write API tests to verify that we didn't introduce
a breaking change because remember, if we do anyone using the API could have their application broken.
