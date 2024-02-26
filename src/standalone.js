import output from "./output.js";

const geoAlbersUsa = function () {
  var point;
  function albersUsa(coordinates) {
    var x = coordinates[0],
      y = coordinates[1];
    return (
      (point = null),
      (lower48Point.point(x, y), point) ||
        (alaskaPoint.point(x, y), point) ||
        (hawaiiPoint.point(x, y), point)
    );
  }
  const lower48Point = {
    point: (x, y) => {
      point = [x, y];
    },
  };
  const alaskaPoint = { point: () => {} };
  const hawaiiPoint = { point: () => {} };
  return albersUsa;
};

const projection = geoAlbersUsa();

output(projection([-90, 45]));
