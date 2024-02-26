import {geoAlbersUsa} from 'd3';
import output from './output.js';

const projection = geoAlbersUsa();

output(projection([-90, 45]));
