import { useEffect, useState } from "react";

const request = indexedDB.open("FlightApp", 1);

request.onerror = function (event) {
  console.error("An error occurred with IndexedDB");
  console.error(event);
};

request.onupgradeneeded = function () {
  const db = request.result;
  const store = db.createObjectStore("flights", { keyPath: "id", autoIncrement:true });
  store.createIndex("nextFlight", ["nextFlight"]);
};

request.onsuccess = function () {
    //console.log("Database opened successfully");

    const db = request.result;

    const transaction = db.transaction("flights", "readwrite");

    const store = transaction.objectStore("flights");
    const nextFlightIndex = store.index("nextFlight");

    store.put({ flightCode, flightDate: Date.now() });

    const query = store.get(1);

    query.onsuccess = function () {
        console.log("next flight", query.result);
    };

    transaction.oncomplete = function () {
        db.close();
    };
}