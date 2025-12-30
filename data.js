var APP_DATA = {
  "scenes": [
    {
      "id": "0-product-display",
      "name": "PRODUCT DISPLAY",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-dental-op",
      "name": "DENTAL OP",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.14888986599922482,
          "pitch": -0.026648612196515487,
          "rotation": 0,
          "target": "3-dental-op-02"
        },
        {
          "yaw": -0.16603533276497018,
          "pitch": -0.0034672396817239104,
          "rotation": 0,
          "target": "4-dental-op-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dentsal-op-01",
      "name": "DENTSAL OP 01",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.2530560926908407,
          "pitch": 0.030945064971547254,
          "rotation": 0,
          "target": "3-dental-op-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dental-op-02",
      "name": "DENTAL OP 02",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.402162036755616,
          "pitch": 0.011683375477112179,
          "rotation": 0,
          "target": "2-dentsal-op-01"
        },
        {
          "yaw": -0.053956585929782364,
          "pitch": -0.03616317324977025,
          "rotation": 0,
          "target": "4-dental-op-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dental-op-03",
      "name": "DENTAL OP 03",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.6498290116474195,
          "pitch": 0.029927937419362394,
          "rotation": 0,
          "target": "1-dental-op"
        },
        {
          "yaw": -3.073650824186224,
          "pitch": 0.1526639077963008,
          "rotation": 3.141592653589793,
          "target": "3-dental-op-02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
