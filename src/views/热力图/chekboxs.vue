<template>
  <div class="mapWarp">
    <div id="maps"></div>
    <el-button @click="removeInfo"
               class="btn">切换城市</el-button>
  </div>
</template>
<script>
import { createdRadio, drawHeatMap, infoWindow, polyCircle } from "./amap";
// import Icon1 from "../assets/2.png";

export default {
  components: {},
  data() {
    return {
      map: "",
      infoWindow: "",
      polygons: [],
      lngArr: [],
      drawHeatMap: "",
      re: [
        {
          lng: 116.191031,
          lat: 39.988585,
          count: 10,
        },
        {
          lng: 116.389275,
          lat: 39.925818,
          count: 11,
        },
        {
          lng: 116.287444,
          lat: 39.810742,
          count: 12,
        },
        {
          lng: 116.481707,
          lat: 39.940089,
          count: 13,
        },
        {
          lng: 116.410588,
          lat: 39.880172,
          count: 14,
        },
        {
          lng: 116.394816,
          lat: 39.91181,
          count: 15,
        },
        {
          lng: 116.416002,
          lat: 39.952917,
          count: 16,
        },
        {
          lng: 116.39671,
          lat: 39.924903,
          count: 17,
        },
        {
          lng: 116.180816,
          lat: 39.957553,
          count: 18,
        },
        {
          lng: 116.382035,
          lat: 39.874114,
          count: 19,
        },
        {
          lng: 116.316648,
          lat: 39.914529,
          count: 20,
        },
        {
          lng: 116.395803,
          lat: 39.908556,
          count: 21,
        },
        {
          lng: 116.74553,
          lat: 39.875916,
          count: 22,
        },
        {
          lng: 116.352289,
          lat: 39.916475,
          count: 23,
        },
        {
          lng: 116.441548,
          lat: 39.878262,
          count: 24,
        },
        {
          lng: 116.318947,
          lat: 39.942735,
          count: 25,
        },
        {
          lng: 116.382585,
          lat: 39.941949,
          count: 26,
        },
        {
          lng: 116.42042,
          lat: 39.884017,
          count: 27,
        },
        {
          lng: 116.31744,
          lat: 39.892561,
          count: 28,
        },
        {
          lng: 116.407059,
          lat: 39.912438,
          count: 29,
        },
        {
          lng: 116.412351,
          lat: 39.888082,
          count: 30,
        },
        {
          lng: 116.444341,
          lat: 39.915891,
          count: 31,
        },
        {
          lng: 116.335385,
          lat: 39.741756,
          count: 32,
        },
        {
          lng: 116.3926,
          lat: 40.008733,
          count: 33,
        },
        {
          lng: 116.389731,
          lat: 39.92292,
          count: 34,
        },
        {
          lng: 116.413371,
          lat: 39.874483,
          count: 35,
        },
        {
          lng: 116.199752,
          lat: 39.911717,
          count: 36,
        },
        {
          lng: 116.278472,
          lat: 40.254994,
          count: 37,
        },
        {
          lng: 116.464252,
          lat: 39.925828,
          count: 38,
        },
        {
          lng: 116.479475,
          lat: 39.937945,
          count: 39,
        },
        {
          lng: 116.415599,
          lat: 39.956902,
          count: 40,
        },
        {
          lng: 116.355675,
          lat: 39.870089,
          count: 41,
        },
        {
          lng: 116.295267,
          lat: 39.987171,
          count: 42,
        },
        {
          lng: 116.323634,
          lat: 39.911692,
          count: 43,
        },
        {
          lng: 116.692769,
          lat: 40.173307,
          count: 44,
        },
        {
          lng: 116.287888,
          lat: 39.928531,
          count: 45,
        },
        {
          lng: 116.386502,
          lat: 39.922747,
          count: 46,
        },
        {
          lng: 116.236773,
          lat: 40.218341,
          count: 47,
        },
        {
          lng: 116.490636,
          lat: 39.804253,
          count: 48,
        },
        {
          lng: 116.391095,
          lat: 39.925791,
          count: 49,
        },
        {
          lng: 116.472402,
          lat: 39.769178,
          count: 50,
        },
        {
          lng: 116.38657,
          lat: 39.956731,
          count: 51,
        },
        {
          lng: 116.427536,
          lat: 39.943671,
          count: 52,
        },
        {
          lng: 116.374547,
          lat: 39.967588,
          count: 53,
        },
        {
          lng: 116.380383,
          lat: 39.871634,
          count: 54,
        },
        {
          lng: 116.376092,
          lat: 39.965485,
          count: 55,
        },
        {
          lng: 116.352424,
          lat: 39.91811,
          count: 56,
        },
        {
          lng: 116.020157,
          lat: 40.348526,
          count: 57,
        },
        {
          lng: 116.416201,
          lat: 39.951736,
          count: 58,
        },
        {
          lng: 116.405392,
          lat: 39.908738,
          count: 59,
        },
        {
          lng: 116.49238,
          lat: 39.926248,
          count: 60,
        },
        {
          lng: 116.389282,
          lat: 39.988391,
          count: 61,
        },
        {
          lng: 116.396683,
          lat: 39.923487,
          count: 62,
        },
        {
          lng: 116.41718,
          lat: 39.905213,
          count: 63,
        },
        {
          lng: 116.321512,
          lat: 39.913192,
          count: 64,
        },
        {
          lng: 116.260028,
          lat: 40.03353,
          count: 65,
        },
        {
          lng: 116.394846,
          lat: 39.911168,
          count: 66,
        },
        {
          lng: 116.374767,
          lat: 39.96608,
          count: 67,
        },
        {
          lng: 116.6841,
          lat: 39.909762,
          count: 68,
        },
        {
          lng: 116.3838,
          lat: 39.95811,
          count: 69,
        },
        {
          lng: 116.39243,
          lat: 40.01143,
          count: 70,
        },
        {
          lng: 116.661912,
          lat: 40.121137,
          count: 71,
        },
        {
          lng: 116.333056,
          lat: 39.90123,
          count: 72,
        },
        {
          lng: 116.484839,
          lat: 39.881729,
          count: 73,
        },
        {
          lng: 116.360923,
          lat: 39.935745,
          count: 74,
        },
        {
          lng: 116.408531,
          lat: 39.953194,
          count: 75,
        },
        {
          lng: 116.417916,
          lat: 39.954029,
          count: 76,
        },
        {
          lng: 116.412215,
          lat: 39.992282,
          count: 77,
        },
        {
          lng: 116.181532,
          lat: 40.048762,
          count: 78,
        },
        {
          lng: 116.434848,
          lat: 40.070463,
          count: 79,
        },
        {
          lng: 116.385039,
          lat: 39.956937,
          count: 80,
        },
        {
          lng: 116.755067,
          lat: 39.854499,
          count: 81,
        },
        {
          lng: 116.396061,
          lat: 39.912841,
          count: 82,
        },
        {
          lng: 116.474303,
          lat: 39.971398,
          count: 83,
        },
        {
          lng: 116.376262,
          lat: 39.85811,
          count: 84,
        },
        {
          lng: 116.403783,
          lat: 39.954469,
          count: 85,
        },
        {
          lng: 116.339136,
          lat: 39.729159,
          count: 86,
        },
        {
          lng: 116.240159,
          lat: 39.947003,
          count: 87,
        },
        {
          lng: 117.107541,
          lat: 40.141457,
          count: 88,
        },
        {
          lng: 116.341813,
          lat: 40.078786,
          count: 89,
        },
        {
          lng: 116.320648,
          lat: 39.706455,
          count: 90,
        },
        {
          lng: 116.402566,
          lat: 39.960873,
          count: 91,
        },
        {
          lng: 116.849261,
          lat: 40.402999,
          count: 92,
        },
        {
          lng: 116.521064,
          lat: 39.834187,
          count: 93,
        },
        {
          lng: 116.329942,
          lat: 39.925327,
          count: 94,
        },
        {
          lng: 116.479852,
          lat: 39.974856,
          count: 95,
        },
        {
          lng: 116.399185,
          lat: 39.925736,
          count: 96,
        },
        {
          lng: 116.193166,
          lat: 39.911953,
          count: 1,
        },
        {
          lng: 116.400916,
          lat: 39.870614,
          count: 2,
        },
        {
          lng: 116.518041,
          lat: 39.956615,
          count: 3,
        },
        {
          lng: 116.388981,
          lat: 39.997716,
          count: 4,
        },
        {
          lng: 116.285852,
          lat: 39.863497,
          count: 5,
        },
        {
          lng: 116.294167,
          lat: 39.884599,
          count: 6,
        },
        {
          lng: 116.394235,
          lat: 39.996845,
          count: 7,
        },
        {
          lng: 116.32471,
          lat: 39.970486,
          count: 8,
        },
        {
          lng: 116.496828,
          lat: 39.99335,
          count: 9,
        },
        {
          lng: 116.482534,
          lat: 39.934086,
          count: 10,
        },
        {
          lng: 116.454662,
          lat: 39.974981,
          count: 11,
        },
        {
          lng: 116.387076,
          lat: 39.87631,
          count: 12,
        },
        {
          lng: 116.433341,
          lat: 39.92803,
          count: 13,
        },
        {
          lng: 116.382196,
          lat: 39.941606,
          count: 14,
        },
        {
          lng: 116.244286,
          lat: 39.82905,
          count: 15,
        },
        {
          lng: 116.566672,
          lat: 40.176097,
          count: 16,
        },
        {
          lng: 116.686862,
          lat: 39.908507,
          count: 17,
        },
        {
          lng: 117.240166,
          lat: 40.175796,
          count: 18,
        },
        {
          lng: 116.428661,
          lat: 39.866958,
          count: 19,
        },
        {
          lng: 116.443292,
          lat: 39.917447,
          count: 20,
        },
        {
          lng: 116.356538,
          lat: 39.926711,
          count: 21,
        },
        {
          lng: 116.194086,
          lat: 39.912242,
          count: 22,
        },
        {
          lng: 116.379861,
          lat: 39.971831,
          count: 23,
        },
        {
          lng: 116.377966,
          lat: 39.874647,
          count: 24,
        },
        {
          lng: 116.466778,
          lat: 39.926304,
          count: 25,
        },
        {
          lng: 116.692078,
          lat: 40.170197,
          count: 26,
        },
        {
          lng: 116.428651,
          lat: 39.94275,
          count: 27,
        },
        {
          lng: 116.322655,
          lat: 39.939517,
          count: 28,
        },
        {
          lng: 116.445601,
          lat: 39.98439,
          count: 29,
        },
        {
          lng: 116.662833,
          lat: 39.912238,
          count: 30,
        },
        {
          lng: 116.394183,
          lat: 39.925557,
          count: 31,
        },
        {
          lng: 116.312788,
          lat: 39.860017,
          count: 32,
        },
        {
          lng: 116.104708,
          lat: 40.065563,
          count: 33,
        },
        {
          lng: 116.204443,
          lat: 39.938295,
          count: 34,
        },
        {
          lng: 116.310917,
          lat: 39.89381,
          count: 35,
        },
        {
          lng: 116.265851,
          lat: 39.834247,
          count: 36,
        },
        {
          lng: 116.33501,
          lat: 39.742507,
          count: 37,
        },
        {
          lng: 116.397519,
          lat: 39.99794,
          count: 38,
        },
        {
          lng: 116.441252,
          lat: 39.915566,
          count: 39,
        },
        {
          lng: 116.441898,
          lat: 39.856454,
          count: 40,
        },
        {
          lng: 116.446552,
          lat: 39.946418,
          count: 41,
        },
        {
          lng: 116.359761,
          lat: 39.895327,
          count: 42,
        },
        {
          lng: 116.349168,
          lat: 39.893551,
          count: 43,
        },
        {
          lng: 116.476819,
          lat: 39.94388,
          count: 44,
        },
        {
          lng: 116.29912,
          lat: 39.988433,
          count: 45,
        },
        {
          lng: 116.467912,
          lat: 39.770524,
          count: 46,
        },
        {
          lng: 116.382134,
          lat: 39.862204,
          count: 47,
        },
        {
          lng: 116.483378,
          lat: 39.93431,
          count: 48,
        },
        {
          lng: 116.35395,
          lat: 39.910738,
          count: 49,
        },
        {
          lng: 116.398771,
          lat: 39.976433,
          count: 50,
        },
        {
          lng: 116.462189,
          lat: 39.925864,
          count: 51,
        },
        {
          lng: 116.378957,
          lat: 39.806676,
          count: 52,
        },
        {
          lng: 116.334199,
          lat: 39.900985,
          count: 53,
        },
        {
          lng: 116.443961,
          lat: 39.913511,
          count: 54,
        },
        {
          lng: 116.388829,
          lat: 39.95053,
          count: 55,
        },
        {
          lng: 116.319655,
          lat: 39.892339,
          count: 56,
        },
        {
          lng: 117.431959,
          lat: 40.630521,
          count: 57,
        },
        {
          lng: 117.108914,
          lat: 40.140406,
          count: 58,
        },
        {
          lng: 116.43019,
          lat: 39.880486,
          count: 59,
        },
        {
          lng: 116.250698,
          lat: 39.907186,
          count: 60,
        },
        {
          lng: 116.341065,
          lat: 39.766082,
          count: 61,
        },
        {
          lng: 116.290335,
          lat: 39.812431,
          count: 62,
        },
        {
          lng: 116.360813,
          lat: 39.936362,
          count: 63,
        },
        {
          lng: 116.400282,
          lat: 39.995027,
          count: 64,
        },
        {
          lng: 116.317257,
          lat: 39.889092,
          count: 65,
        },
        {
          lng: 116.482537,
          lat: 39.954978,
          count: 66,
        },
        {
          lng: 116.38496,
          lat: 39.954428,
          count: 67,
        },
        {
          lng: 116.391803,
          lat: 39.911587,
          count: 68,
        },
        {
          lng: 116.4266,
          lat: 39.867228,
          count: 69,
        },
        {
          lng: 116.145997,
          lat: 39.790856,
          count: 70,
        },
        {
          lng: 116.430265,
          lat: 39.867451,
          count: 71,
        },
        {
          lng: 116.315479,
          lat: 39.940668,
          count: 72,
        },
        {
          lng: 116.359393,
          lat: 39.975431,
          count: 73,
        },
        {
          lng: 116.382347,
          lat: 39.968935,
          count: 74,
        },
        {
          lng: 115.987169,
          lat: 40.454625,
          count: 75,
        },
        {
          lng: 116.489292,
          lat: 39.931242,
          count: 76,
        },
        {
          lng: 116.368238,
          lat: 39.879807,
          count: 77,
        },
        {
          lng: 116.493761,
          lat: 39.923885,
          count: 78,
        },
        {
          lng: 116.53666,
          lat: 39.8778,
          count: 79,
        },
        {
          lng: 116.501743,
          lat: 39.79602,
          count: 80,
        },
        {
          lng: 116.582818,
          lat: 39.932646,
          count: 81,
        },
        {
          lng: 116.417364,
          lat: 39.869292,
          count: 82,
        },
        {
          lng: 116.354305,
          lat: 39.872022,
          count: 83,
        },
        {
          lng: 116.375162,
          lat: 40.01344,
          count: 84,
        },
        {
          lng: 116.400523,
          lat: 39.881031,
          count: 85,
        },
        {
          lng: 116.315365,
          lat: 39.945005,
          count: 86,
        },
        {
          lng: 116.44088,
          lat: 39.810753,
          count: 87,
        },
        {
          lng: 116.679285,
          lat: 39.916527,
          count: 88,
        },
        {
          lng: 116.483694,
          lat: 39.946929,
          count: 89,
        },
        {
          lng: 116.341678,
          lat: 40.080021,
          count: 90,
        },
        {
          lng: 116.017167,
          lat: 39.889175,
          count: 91,
        },
        {
          lng: 116.454692,
          lat: 39.954167,
          count: 92,
        },
        {
          lng: 116.410129,
          lat: 40.050952,
          count: 93,
        },
        {
          lng: 116.418556,
          lat: 39.872365,
          count: 94,
        },
        {
          lng: 116.25432,
          lat: 40.142367,
          count: 95,
        },
        {
          lng: 116.658763,
          lat: 39.891072,
          count: 96,
        },
        {
          lng: 116.305312,
          lat: 39.9953,
          count: 97,
        },
        {
          lng: 116.388761,
          lat: 39.951259,
          count: 98,
        },
        {
          lng: 116.68017,
          lat: 39.873413,
          count: 99,
        },
        {
          lng: 116.090539,
          lat: 39.796301,
          count: 1,
        },
        {
          lng: 116.380305,
          lat: 39.78354,
          count: 2,
        },
        {
          lng: 116.348831,
          lat: 40.022543,
          count: 3,
        },
        {
          lng: 116.438133,
          lat: 39.960988,
          count: 4,
        },
        {
          lng: 116.199587,
          lat: 39.911,
          count: 5,
        },
        {
          lng: 116.081743,
          lat: 39.788321,
          count: 6,
        },
        {
          lng: 117.24044,
          lat: 40.1752,
          count: 7,
        },
        {
          lng: 116.636141,
          lat: 40.327724,
          count: 8,
        },
        {
          lng: 116.453166,
          lat: 39.973511,
          count: 9,
        },
        {
          lng: 116.583381,
          lat: 39.953315,
          count: 10,
        },
        {
          lng: 116.236326,
          lat: 39.90595,
          count: 11,
        },
        {
          lng: 116.328305,
          lat: 39.781647,
          count: 12,
        },
        {
          lng: 116.260012,
          lat: 39.984951,
          count: 13,
        },
        {
          lng: 116.254938,
          lat: 39.916206,
          count: 14,
        },
        {
          lng: 116.85469,
          lat: 40.474419,
          count: 15,
        },
        {
          lng: 116.309389,
          lat: 39.971918,
          count: 16,
        },
        {
          lng: 116.310732,
          lat: 39.971517,
          count: 17,
        },
        {
          lng: 116.401885,
          lat: 39.847641,
          count: 18,
        },
        {
          lng: 116.427771,
          lat: 39.880572,
          count: 19,
        },
        {
          lng: 116.430537,
          lat: 39.880968,
          count: 20,
        },
        {
          lng: 116.550673,
          lat: 39.895212,
          count: 21,
        },
        {
          lng: 116.345906,
          lat: 39.815152,
          count: 22,
        },
        {
          lng: 116.512016,
          lat: 39.868573,
          count: 23,
        },
        {
          lng: 115.894604,
          lat: 39.803644,
          count: 24,
        },
        {
          lng: 116.32497,
          lat: 40.083198,
          count: 25,
        },
        {
          lng: 116.315523,
          lat: 39.858242,
          count: 26,
        },
        {
          lng: 116.465052,
          lat: 39.903055,
          count: 27,
        },
        {
          lng: 116.464814,
          lat: 39.924176,
          count: 28,
        },
        {
          lng: 115.959538,
          lat: 39.727218,
          count: 29,
        },
        {
          lng: 116.478895,
          lat: 39.954472,
          count: 30,
        },
        {
          lng: 116.337546,
          lat: 39.741337,
          count: 31,
        },
        {
          lng: 116.504757,
          lat: 39.83778,
          count: 32,
        },
        {
          lng: 116.393143,
          lat: 40.02725,
          count: 33,
        },
        {
          lng: 116.23419,
          lat: 40.217361,
          count: 34,
        },
        {
          lng: 116.368688,
          lat: 39.829561,
          count: 35,
        },
        {
          lng: 116.460134,
          lat: 39.983721,
          count: 36,
        },
        {
          lng: 116.381539,
          lat: 39.746766,
          count: 37,
        },
        {
          lng: 116.291759,
          lat: 39.983886,
          count: 38,
        },
        {
          lng: 116.377613,
          lat: 39.817895,
          count: 39,
        },
        {
          lng: 116.306646,
          lat: 39.956296,
          count: 40,
        },
        {
          lng: 116.160747,
          lat: 39.818863,
          count: 41,
        },
        {
          lng: 116.392912,
          lat: 40.001989,
          count: 42,
        },
        {
          lng: 116.199115,
          lat: 39.91276,
          count: 43,
        },
        {
          lng: 116.434577,
          lat: 39.812232,
          count: 44,
        },
        {
          lng: 116.495843,
          lat: 39.925538,
          count: 45,
        },
        {
          lng: 116.333803,
          lat: 39.913224,
          count: 46,
        },
        {
          lng: 116.489277,
          lat: 39.941842,
          count: 47,
        },
        {
          lng: 116.510514,
          lat: 39.973547,
          count: 48,
        },
        {
          lng: 116.474685,
          lat: 39.936648,
          count: 49,
        },
        {
          lng: 116.418054,
          lat: 39.905091,
          count: 50,
        },
        {
          lng: 116.285529,
          lat: 39.926274,
          count: 51,
        },
        {
          lng: 116.289399,
          lat: 39.948054,
          count: 52,
        },
        {
          lng: 116.508241,
          lat: 39.920234,
          count: 53,
        },
        {
          lng: 116.317979,
          lat: 40.000721,
          count: 54,
        },
        {
          lng: 116.428324,
          lat: 39.868263,
          count: 55,
        },
        {
          lng: 116.407517,
          lat: 40.016715,
          count: 56,
        },
        {
          lng: 116.338841,
          lat: 39.969646,
          count: 57,
        },
        {
          lng: 116.495703,
          lat: 39.992607,
          count: 58,
        },
        {
          lng: 116.369659,
          lat: 39.97595,
          count: 59,
        },
        {
          lng: 116.291709,
          lat: 39.96228,
          count: 60,
        },
        {
          lng: 116.311003,
          lat: 39.998264,
          count: 61,
        },
        {
          lng: 116.391429,
          lat: 39.93324,
          count: 62,
        },
        {
          lng: 116.406033,
          lat: 39.95407,
          count: 63,
        },
        {
          lng: 116.391856,
          lat: 39.912004,
          count: 64,
        },
        {
          lng: 116.356434,
          lat: 39.871474,
          count: 65,
        },
        {
          lng: 116.477081,
          lat: 39.970334,
          count: 66,
        },
        {
          lng: 116.475337,
          lat: 39.939749,
          count: 67,
        },
        {
          lng: 116.752911,
          lat: 39.916369,
          count: 68,
        },
        {
          lng: 116.470361,
          lat: 39.874606,
          count: 69,
        },
        {
          lng: 116.489172,
          lat: 39.949033,
          count: 70,
        },
        {
          lng: 116.502514,
          lat: 39.973734,
          count: 71,
        },
        {
          lng: 116.186985,
          lat: 39.920185,
          count: 72,
        },
        {
          lng: 116.583743,
          lat: 39.95335,
          count: 73,
        },
        {
          lng: 116.119183,
          lat: 39.732055,
          count: 74,
        },
        {
          lng: 116.391902,
          lat: 39.93331,
          count: 75,
        },
        {
          lng: 116.488588,
          lat: 39.953371,
          count: 76,
        },
        {
          lng: 116.381798,
          lat: 39.975717,
          count: 77,
        },
        {
          lng: 116.384689,
          lat: 39.827773,
          count: 78,
        },
        {
          lng: 116.445287,
          lat: 39.894354,
          count: 79,
        },
        {
          lng: 116.24048,
          lat: 39.947687,
          count: 80,
        },
        {
          lng: 116.413605,
          lat: 40.04902,
          count: 81,
        },
        {
          lng: 116.239012,
          lat: 39.904288,
          count: 82,
        },
        {
          lng: 116.408522,
          lat: 40.016971,
          count: 83,
        },
        {
          lng: 116.475833,
          lat: 39.947107,
          count: 84,
        },
        {
          lng: 116.43476,
          lat: 39.901671,
          count: 85,
        },
        {
          lng: 116.40229,
          lat: 39.869205,
          count: 86,
        },
        {
          lng: 116.226013,
          lat: 40.213485,
          count: 87,
        },
        {
          lng: 116.689042,
          lat: 39.889192,
          count: 88,
        },
        {
          lng: 116.377252,
          lat: 39.873622,
          count: 89,
        },
        {
          lng: 116.53061,
          lat: 40.103146,
          count: 90,
        },
        {
          lng: 116.416271,
          lat: 39.905187,
          count: 91,
        },
        {
          lng: 116.531169,
          lat: 39.91276,
          count: 92,
        },
        {
          lng: 116.17849,
          lat: 40.075692,
          count: 93,
        },
        {
          lng: 116.188616,
          lat: 40.102413,
          count: 94,
        },
        {
          lng: 116.531799,
          lat: 39.84939,
          count: 95,
        },
        {
          lng: 116.443707,
          lat: 39.87558,
          count: 96,
        },
        {
          lng: 116.814298,
          lat: 40.53416,
          count: 97,
        },
        {
          lng: 116.428247,
          lat: 39.873118,
          count: 98,
        },
        {
          lng: 116.290774,
          lat: 39.963116,
          count: 99,
        },
        {
          lng: 116.299918,
          lat: 39.936094,
          count: 100,
        },
        {
          lng: 116.489325,
          lat: 39.944556,
          count: 101,
        },
        {
          lng: 116.339297,
          lat: 40.038739,
          count: 102,
        },
        {
          lng: 116.485631,
          lat: 39.804667,
          count: 103,
        },
        {
          lng: 116.480549,
          lat: 39.955012,
          count: 104,
        },
        {
          lng: 116.381977,
          lat: 39.878496,
          count: 1,
        },
        {
          lng: 116.259586,
          lat: 40.043622,
          count: 2,
        },
        {
          lng: 116.587813,
          lat: 40.015618,
          count: 3,
        },
        {
          lng: 116.35472,
          lat: 39.975865,
          count: 4,
        },
        {
          lng: 116.644011,
          lat: 40.299776,
          count: 5,
        },
        {
          lng: 116.299449,
          lat: 39.95324,
          count: 6,
        },
        {
          lng: 116.332228,
          lat: 39.900741,
          count: 7,
        },
        {
          lng: 116.377459,
          lat: 39.80869,
          count: 8,
        },
        {
          lng: 116.657873,
          lat: 40.120521,
          count: 9,
        },
        {
          lng: 116.154466,
          lat: 39.731616,
          count: 10,
        },
        {
          lng: 116.845418,
          lat: 40.375612,
          count: 11,
        },
        {
          lng: 116.466696,
          lat: 39.766475,
          count: 12,
        },
        {
          lng: 116.45685,
          lat: 40.011172,
          count: 13,
        },
        {
          lng: 116.406651,
          lat: 39.970182,
          count: 14,
        },
        {
          lng: 116.428161,
          lat: 39.866144,
          count: 15,
        },
        {
          lng: 116.504801,
          lat: 39.836822,
          count: 16,
        },
        {
          lng: 116.439995,
          lat: 39.81546,
          count: 17,
        },
        {
          lng: 116.559057,
          lat: 39.936131,
          count: 18,
        },
        {
          lng: 116.225584,
          lat: 39.842961,
          count: 19,
        },
        {
          lng: 116.64103,
          lat: 40.141812,
          count: 20,
        },
        {
          lng: 116.306028,
          lat: 39.860581,
          count: 21,
        },
        {
          lng: 116.403426,
          lat: 40.066843,
          count: 22,
        },
        {
          lng: 116.399935,
          lat: 40.009504,
          count: 23,
        },
        {
          lng: 116.309222,
          lat: 39.913107,
          count: 24,
        },
        {
          lng: 116.295396,
          lat: 39.784501,
          count: 25,
        },
        {
          lng: 116.289673,
          lat: 39.963462,
          count: 26,
        },
        {
          lng: 116.445731,
          lat: 40.051509,
          count: 27,
        },
        {
          lng: 116.395362,
          lat: 39.975426,
          count: 28,
        },
        {
          lng: 116.605608,
          lat: 40.0489,
          count: 29,
        },
      ],
      isHeatMap: "",
      target: [116.397428, 39.90923],
      target1: [118.534589, 37.458525],
      re2: [
        { lng: 118.542116682, lat: 37.4558955896, count: 1366 },
        { lng: 118.701980685, lat: 37.4270927093, count: 1282 },
      ],
      num: 0,
      heatmap: "",
    };
  },
  mounted() {
    this.initMap(this.target);
    this.markerTarget ()
    this.handleDistrict ()
    this.initHeatmap(this.re); 
  },
  methods: { 
    // 清除标记
    removeInfo() {
      this.num++;
      if (this.num % 2 === 0) {
        this.initMap(this.target);
        let max = this.re.length > 50 ? 1000 : 100;
        this.initHeatmap(this.re, max);
        console.log("1111");
      } else {
        this.initMap(this.target1);
        this.initHeatmap(this.re2);
        console.log("2222");
      } 
    },
    // 地图初始化
    initMap(target) {
      this.map = new AMap.Map("maps", {
        zoom: 13, //级别
        center: target, //中心点坐标
      });
      // this.map.on ('complete', () => {
      //   console.log ('加载完成了')
      // });
    },
    // 画点
    markerTarget() {
      let temp = createdRadio({
        map: this.map,
        position: [116.4770936966, 39.90851824],
        title: "测试",
        // offset: new AMap.Pixel(10,20),
        icon: {
          image: Icon1,
          imageSize: new AMap.Size(20, 20),
        },
      });
      this.circleMaps(116.4770936966, 39.90851824, 2000);
      AMap.Event.addListener(temp, "click", (e) => {
        // 清除信息或者清除点 在点击之前
        this.infoWindow && this.map.remove(this.infoWindow);
        this.infoWindowFun();
      });
    },
    // 画圆
    circleMaps(x, y, r) {
      let circle = polyCircle({
        center: [x, y],
        radius: r,
      });
      circle.setMap(this.map);
    },
    // 点击显示的信息
    infoWindowFun(marker, center) {
      this.infoWindow = infoWindow(this.map, 116.4770936966, 39.90851824, {
        anchor: "top-center",
        content: `
          <div>我是内容</div>
        `,
      });
    },
    initHeatmap(codeData) {
      let _this = this;
      _this.map.plugin(["AMap.HeatMap"], () => {
        _this.heatmap = new AMap.HeatMap(_this.map, {
          radius: 12, //给定半径
          opacity: [0, 0.7],
          // gradient:{
          //     0.5: 'blue',
          //     0.65: 'rgb(117,211,248)',
          //     0.7: 'rgb(0, 255, 0)',
          //     0.9: '#ffea00',
          //     1.0: 'red'
          // }
        });
        _this.heatmap.setDataSet({
          data: codeData,
          max: 200, //max值每个城市都是不一样的。
        });
      });
    },
    // // 热力图
    // handleDrawHeatMap(data, max = 100) {
    //   console.log(data, "----data");
    //   if (this.isHeatMap) {
    //     this.isHeatMap.setDataSet({
    //       data,
    //       max,
    //     });
    //   } else {
    //     this.isHeatMap = "";
    //     // drawHeatMap(this.map, this.re, max).then(
    //     //   (res) => (this.isHeatMap = res)
    //     // );
    //   }
    // },
    // 行政区边界线
    handleDistrict() {
      let _this = this;
      let ops = {
        subdistrict: 0,
        extensions: "all",
        level: "district",
      };
      let ds = new AMap.DistrictSearch(ops);
      ds.setLevel("district");
      ds.search("通州区", function (status, result) {
        // 查询成功时，result即为对应的行政区信息
        if (status === "complete") {
          _this.getDataLine(result.districtList[0]);
        }
      });
    },
    getDataLine(data) {
      this.map.remove(this.polygons);
      this.polygons = [];
      let bounds = data.boundaries;
      if (bounds) {
        for (let i = 0, l = bounds.length; i < l; i++) {
          //生成行政区划polygon
          let polygon = new AMap.Polygon({
            // map: this.map,
            strokeWeight: 1,
            path: bounds[i],
            fillOpacity: 0.7,
            fillColor: "#CCF3FF",
            strokeColor: "#CC66CC",
          });
          this.polygons.push(polygon);
        }
        // 地图自适应
        this.map.add(this.polygons);
        this.map.setFitView(this.polygons);
      }
    },

    // 海量创建点
    allTarget (dara) {
      let style = [
        {url: Icon1, size: new AMap.size (20, 20)}
      ]
      let datas = dara.map (item => {
        return {lnglat: [jingdu, weidu]}
      })
      let MassMarker = new AMap.MAssMarks(datas, {
        zIndex:119,
        zooms:[3,19],
        style
      })
      MassMarker.setMap(this.map)
    }
  },
};
</script>
<style lang="scss" scoped>
.mapWarp {
  position: relative;
  width: 100%;
  height: 100%;

  .btn {
    position: fixed;
    top: 100px;
  }

  #maps {
    position: absolute;
    width: 100%;
    height: 98%;
    margin: 0 auto;
  }
}
</style>

