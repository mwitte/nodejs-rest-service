Rest Service
============


Build
-----
	npm install
	grunt


Apache Bench
------------
	ab -n 100 -c 100 -p <file> -T application/x-www-form-urlencoded http://127.0.0.1:3000/address/


Curl
----
	curl -X POST --data "firstname=Steffi&surname=Huber&street=Sonnenstrasse+7&postcode=83022&city=Rosenheim&country=Deutschland" http://127.0.0.1:3000/address/

	curl -X PUT --data "id=1&surname=Grawer" http://127.0.0.1:3000/address/

	curl -X GET --data "id=1" http://127.0.0.1:3000/address/

	curl -X DELETE --data "id=1" http://127.0.0.1:3000/address/


Licence
-------
It is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License,
either version 3 of the License, or (at your option) any later version.

by [Matthias Witte](http://www.matthias-witte.net)