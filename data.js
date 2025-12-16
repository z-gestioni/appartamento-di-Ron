var APP_DATA = {
  "scenes": [
    {
      "id": "0-soggiorno",
      "name": "soggiorno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.17752150268573175,
        "pitch": 0.291283963401856,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 0.07503887125954378,
          "pitch": 0.5079194667575031,
          "rotation": 0,
          "target": "2-corridoio"
        },
        {
          "yaw": -1.5180105807712145,
          "pitch": 0.4229374582087644,
          "rotation": 0,
          "target": "1-balcone"
        },
        {
          "yaw": 2.448059107582181,
          "pitch": 0.5503092621784944,
          "rotation": 0.7853981633974483,
          "target": "5-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-balcone",
      "name": "balcone",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -1.415005654571182,
        "pitch": -0.012399319274774001,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.9639460623457232,
          "pitch": 0.43514102460529,
          "rotation": 0,
          "target": "0-soggiorno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridoio",
      "name": "corridoio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5451667536561189,
          "pitch": 0.5978153978635063,
          "rotation": 0,
          "target": "4-bagno"
        },
        {
          "yaw": -0.1481946826741094,
          "pitch": 0.5238296055871086,
          "rotation": 0,
          "target": "3-camera-da-letto"
        },
        {
          "yaw": -3.104948727730264,
          "pitch": 0.5648164568436584,
          "rotation": 0,
          "target": "0-soggiorno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-camera-da-letto",
      "name": "camera da letto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.2653856807827015,
        "pitch": 0.13558865908009565,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -3.1270241504795084,
          "pitch": 0.5191733420483224,
          "rotation": 0,
          "target": "2-corridoio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bagno",
      "name": "bagno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 1.357578132340615,
        "pitch": 0.3571353502075141,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.6778379886369077,
          "pitch": 0.5509347721369178,
          "rotation": 0,
          "target": "2-corridoio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrata",
      "name": "entrata",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.11117508249005148,
        "pitch": 0.12053129520077022,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": -0.13544066689028966,
          "pitch": 0.5379418907349276,
          "rotation": 0,
          "target": "0-soggiorno"
        },
        {
          "yaw": 2.1762850465380534,
          "pitch": 0.5763205324518825,
          "rotation": 5.497787143782138,
          "target": "6-atrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-atrio",
      "name": "atrio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14243919976931707,
          "pitch": 0.3712555037560179,
          "rotation": 7.0685834705770345,
          "target": "5-entrata"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Appartamento di Ron",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
