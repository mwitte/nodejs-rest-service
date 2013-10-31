Rest Service
============

This is a simple rest service based on nodejs. It supports the basic rest methods like GET, POST, PUT and DELETE.
There are some fixtures in the db directory.

Build and run
-------------
	npm install
	grunt server


Example requests
----------------
	curl -X POST --data "firstname=Steffi&surname=Huber&street=Salinplatz+7&postcode=83022&city=Rosenheim&country=Deutschland" http://127.0.0.1:3000/address/

	curl -X PUT --data "id=1&surname=Grawer" http://127.0.0.1:3000/address/

	curl -X GET --data "id=1" http://127.0.0.1:3000/address/

	curl -X DELETE --data "id=1" http://127.0.0.1:3000/address/


Apache Bench
------------
	ab -n 1000 -c 100 http://127.0.0.1:3000/address/1

Requests per second: 2317.08 [#/sec] (mean)


Licence
-------
It is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License,
either version 3 of the License, or (at your option) any later version.

by [Matthias Witte](http://www.matthias-witte.net)