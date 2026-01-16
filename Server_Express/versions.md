# Version

Example: "^5.2.1"

Every version has 3 parts:
1st part -> 5
2nd part -> 2
3rd part -> 1

3rd Part ( last part ) - Minor Fixes (optional)
5.2.2

2nd Part - Recommended Bug Fix (Security Fix)
5.3.0

1st Part - Major Release.
6.0.0
The code of Version 5 may or maybe run on verison 6.
if an application is build on specific version then changing its version's major release could even result in ruining your application, so if you are building a new application then use the latest version but if working on a pre-build app then stick to its version, you can update the Recommended bug and minor fixes but not major release in a pre-build app.

"^version" -> Compatible with version
^5.2.1 -> 5.2.1 to < 6.0.0
when we will update it, it will update till version < 6.0.0 without any problem. "^" Install all recommended and minor version automatically but not the major version.

"~" -> only automatically update the minor version but not the Recommended Bug version update. If any recommended bug or major change is there then the programmer will have to do it on its own.
