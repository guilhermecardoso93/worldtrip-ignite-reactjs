export const continents = [
  {
    continentId: 1,
    continentName: "Ásia",
    continentTitle: "O continente mistura de tradicional e tecnologia",
    bgImage:
      "https://images.pexels.com/photos/19885/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    continentDescription:
      "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.",
    continentCountries: 50,
    continentLanguages: 2300,
    continentMostCities: 50,
    city: [
      {
        cityName: "Hong Kong",
        country: "China",
        flag:
          "data:image/png;base64,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",
      },
      {
        cityName: "Bangkok",
        country: "Tailandia",
        flag:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAAD1BMVEWlGTEtKkr09fjarLaysb7BQ3EbAAAAu0lEQVR4nO3dCQnAUAwFwfTwr7kmCoG/MwqyAh6ZAQAAAAAAAI7xtM3dpr9Nf5v+Nv1t+tv0t+lv09+mv01/m/42/W362+Ztm6tNf5v+Nv1t+tv0t+lv09+mv01/m/42/W362/S36W/T36a/TX+b/jb9bfrb9Lfpb9Pfpr9Nf5v+Nv1t+f7tAeKy/P51+4Bl+tv0t+lv09+mv01/m/42/W362/S36W/T35bv335AuGz7/SQAAAAAAADwnw8DTbFPbqgDPgAAAABJRU5ErkJggg==",
      },
      {
        cityName: "Macau",
        country: "China",
        flag:
          "data:image/png;base64,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",
      },
      {
        cityName: "Dubai",
        country: "Paises Arabes Unidos",
        flag:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAM1BMVEUAAAD/AAD///8Acy8Dezjx9/Px8fGlAAClSx4AdjD/paWlTyQAfjr4oJ7w/fn4nJzw9vanPpw3AAABXklEQVR4nO3QxwHCQBAAMRNNhv6rpQjt70YlaDvMut1PK9nqE/WR+kh9pD5SH6mP1EfqI/WR+kh9pD5SH6mP1EfqI/WR+kh9pD5SH6mP1EfqI/WR+kh9pD5SH6mP1EfqI/WR+kh9pD5SH6mP1EfqI/WR+kh9pD5SH6mP1EfqI/WR+sh03/N1Xsl03/tzWcl03+O4lPpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfWS67/u7rmS6b9/WUh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6iP1kfpIfaQ+Uh+pj9RH6hN/5IM1elaWL0MAAAAASUVORK5CYII=",
      },
      {
        cityName: "Mumbai",
        country: "India",
        flag:
          "data:image/png;base64,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",
      },
      {
        cityName: "Tokyo",
        country: "Japão",
        flag:
          "data:image/jpeg;base64,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",
      },
      {
        cityName: "Taipei",
        country: "China",
        flag:
          "data:image/png;base64,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",
      },
      {
        cityName: "Seoul",
        country: "Coréia do Sul",
        flag:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    continentId: 2,
    continentName: "Europa",
    continentTitle: "O continente mais antigo",
    bgImage:
      "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    continentDescription:
      "A Europa é, por convenção um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a lesta pela divisória de água dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
    continentCountries: 50,
    continentLanguages: 60,
    continentMostCities: 50,
    city: [
      {
        cityName: "Londres",
        country: "Reino Unido",
        flag:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACZCAMAAADXexy/AAAAYFBMVEXIEC7///8BIWnTQVnYV2z43+PPMErut8Djh5b99/j7/P2Rn74PLXELKm+AkLT4+fvm6fBfc6BOZJbAyNotR4MnQn+4wdXKGDX77/Hgd4jNJUDrp7LcZ3rnl6Tzy9H00dc6gwdOAAAEvElEQVR4nO2d6XLbMAyE6Tp3r1xtjrbJ+79lx4pVKxZEEcAumM5gf2WimORH7lqKRJHl5HSzrKvPXz5BdChyW2raHv4QU/HXb9/35T0+zas7Oy/l4eKy0gPXN5Bm9OK/vR6L+/U8q2xH/tYLlQ7Y3N0D2tGH/8fPsbBXodrB+ZMfl4QIQQ/+NesPhyZWWJY/BB34V60/5WeHIJy/wfrv+bkhCOZvsv4xPzMEsfxt1p/xE0MQyX+w/kvV+gI/LQRx/O3WF/lJIQjjV1hf5ueEIIhfZf03/vrpQZApBCH8Suu/8bcaZSJDCCL4b5TWH/kVvTVKHQI+f+sFj8Cv/MhO2hCw+S3Wn/DTQ0Dm137rT/ivbP220YWAyn9/N35G7+NizM3w4fYQEPnN1h+GsHjM0x4CHr+z9cXdg1353e4tmGL68AMGruyLIoeAwo9o88hPDgGBH+PZgi4wiB81XGVaKC8EaH5YS9/x80KA5Qc6tfCKZvFDB+mYnxQCID+2fXN+Sghg/Gh/CvyMEID48UMj8uNDgOEnRHOBH93TCH7KV/MSP7g6Pz/p1LzMD7Wbm591aVbjB/a5k593aV7lx1Xs4mf+a7bCjzKeh5/6r/kqP6b37fzkWzPr/JAmWPnpt+Za+AEWNPLzb8228bvHwcQfcWu+kd/bGAN/wF1pDb/PjAb+gKcSOn5XCPT8e5EfzWr4XSGw8dMfzev4XSEw8POnZmj53SFQ8EdMzVHze0PQzB8wK8XG7wtBM3/ArCQrvycEzfyzY5SpmaVSJkXa8x9ZyR+s5E/+5E/+5E/+5O/Pvw3WQ5X/Ibo51dakUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqnU/6ToB64f7flv9AP3j/b8P7rC5E/+5E/+5E/+5E/+3vzO938knZ7MuA4H7fznZ/O///24P2h+/8fyodvrSjMvL+aX+M8IfrnkP+MCtmHvfx3e/1OPko9fdFbZvoxHQ97/U1t/0kA3Pz4E9vd/BdUNCuFHh8D6/rd6bFD84BDY3v/XNwvIDw2Baf0HQSu2NPA7amOs/+Cwvnf9D0moEKjXf7E1xsDv7XIkv8f6mPV/jPVC+AHjYOR3+w7AD2mClZ8eAsX6b4KaLWjnJ4egef0/X+97+KkhaFz/0Vuxi58Zgrb1PwXpjOfk54WgZf1XQJ+7+VkhWF//F1Kdn58UgtX1nwUZ7Ibgp4RgZf1vVE9j+AkhqK7/jqqEsv47Zmhq6/8Lsn7TwvjR7Vve/wHTv3h+rD+X9v8AFM3ihw7Swv4vglxX2lh+YEvF/X/cvUrnhzlV2P/JV2AQP2q45vt/CfLfaSHwY9p8vP+bpy+j+RGeLZhi+vADBq5E3GSM2f/R1PoScZM5aP9PSWvuLVeOD7c2MWz/V/0QVua/IJ+0Uvk9IVjmhz5pJ/PbQ7DED55pweY3nwlkfvhMGz7/dP93BZHIj59pFcFvCoHAj59kFMRvCcGMnzHJLIzfcCZo6CP3JMNAfnUIVg77rR/Mrw3Bij381g/n14VguWd2Ali/A78mBOIvx9YgrN+DXxEC0RSDQNbvw98cguP++CeU9XvxN4Zgw7Z+N/62ENCtP6gPf0sIJOs/Ia0/qBf/agj+AoTe43JUadxpAAAAAElFTkSuQmCC",
      },
      {
        cityName: "Paris",
        country: "França",
        flag:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAFZJ2frnzgYftHTARpUz/AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=",
      },
      {
        cityName: "Istambul",
        country: "Turquia",
        flag:
          "data:image/png;base64,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",
      },
      {
        cityName: "Roma",
        country: "Italia",
        flag:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAeFBMVEX///8AkkbOKzcAAAAAfj0Ajj5/u5TegYbNHy7VLTlMEBTs7Oy/v78LCwsAlUcABgMJAgMAh0G/KDMAbTWaICkAGAwWBQYAdTgAhDp2rYnz8PLu8/LNeHy+HivFKTVHDxMAXy1fjG+mYWWaGCI4DA8AIRAcBggmCArU4L4vAAABNUlEQVR4nO3Qx2ECQQAEsIUlmOQDk5PJ0H+H8KWA+UklqCwr31alrmchm+1ulLI/HP8y/k+11M5vK6PbKzn9n3bGYOjEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTsInIeGTQcjnpDnPUy7jnOttEXKv5dHkTHKmMc/XG4OYJDtdQw91AAAAAElFTkSuQmCC",
      },
      {
        cityName: "Praga",
        country: "Republica Tcheca",
        flag:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAolBMVEX////XFBoRRX7VAADrpKUARoDYExgAR4PhDQYAP3sAPXoARn/cERMAL3MAM3UAMXQALHL4+fvKGieRLlGfKknTFR3bERQAOXgANndWcZn09vhLaZSLMFTHGyo8QHTNGCRSPW2mKER5javL0t1whqfCythnf6JfeJ24wtGwusxJZ5Omssbs7/PTmKA4QXVDP3KWLU5UPG2hKkhcO2mqJkFoOGWpJ7ySAAAEIElEQVR4nO3WCXbTMBSFYV+BK5yQtsxzW+aZAoX9bw2FtidNnDgeJL1JdwXyd/7zkupNVba5WfOW+gns5tzxO+o3cJtzrqSyMbdcSWVt/01KKmtzVyuprHZtUlJZza1WUrnaDRM3m5VUlnNrK6kst24SUnlP/SL6uc2VVNomJZUtJiGVD9Svot02E+upbDUxnsoOE9Op7DJxbmE2ld0mdlPpMFmmco/6fRTrNDGaSreJzVT2mVhMZa+JwVR6mLjZE1up9DGxlko/E1up9DQxlUpvE0Op9DcJqXy0kcoQk5DKJ+r35tggEyOpDDQxcVWGmlhIZbiJmz1VflVGmKhPZZSJa1SnMs5EdypjTTSnMtrEuSOtqUwwUZvKFBOtqUwz0ZnKRBOVqUw2UZjKdJOQyrPn1J8RdTFMtKUSxST8rdWUSiQT1xzqSSWWiaarEs9ETyoRTdSkEtUkpPKZ+oMiLK6JjlRim7jmSPxViW6iIJUEJuKvSgoT6amkMQlXRXAqiUycO5SbSjITwamkM5GbSkoTqT9ASU1CKi8EppLYRORVSW0iMZX0Jq5ZCEslg0n4WysrlSwmwlLJY7K8Kt+oP7X3cplI+gHKZiIolYwmYq5KThMpqeQ1kXFVMpuISCW7iYCrkt8kpPKFdyoUJiGVr9Tf3TUSE+apEJmwToXKhHMqdCZ8UyE0YZsKqQnTVGhNeKZCbcIxFWoSxzAVapDlmmNeqVB7XI5XKtQaV2sW329zGRMT/+PVLTZjYTL3L+8cgM04mIRI7lI73By9CbNIwMDEn/CKBOQm/CIBtQnDSEBrwjISkJrwjASEJlwjAZ2JP7nPMxJQmcz9A66RgMiEcyQgMeEdCShMmEeC/CbsI0F2E3/OPRJkNpEQCfKaiIgEOU2ERIKMJlIiQTYTOZEgl4mgSJDHRFQkyGLiz08FRYIMJtIiQXoTcZEgtcnc/5QWCRKbSIwESU1qkZEgpYnQSJDORGwkSGYiNxIkMpEcCdKYiI4EKUyER4IEJtIjQXSTupYeCWKbKIgEcU1URIKoJv5MQySIaKIlEsQzURMJYpnU9UMtkSCSiaZIEMVEVySIYaIsEkw3URcJJpv4s0fKIsFEE42RYJqJykgwxURpJJhgojUSjDbRGwnGmiiOBONMVEeCUSa6I8EIE+2RYLiJ/6U8Egw1qevf2iPBQBMLkWCQiY1IMMTESCTob2ImEvQ2sRMJeppYigT9TExFgj4mxiJBDxNrkWCvSV2/NhYJ9pn4C3ORoNvEZCToNLEZCTpM6rnNSLDbxGwk2GViOBLsMPEXMBsJtprYjgTbTIxHgraJ+UjQMimRYMOknv8xHwnWTUokl1uZ1HWJ5HJViaS1qlyS1qrrSB5Tv4TPqnJJWgsm/u9BieTmqnJJWqtKJK39A94y3RnYCDsIAAAAAElFTkSuQmCC",
      },
      {
        cityName: "Amsterdam",
        country: "Holanda",
        flag:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///+uHCghRousChwTP4hTj+ZIAAABB0lEQVR4nO3QuRGAAAzAsPDsPzN9XFJAIU3g8xxs83XAD3lSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKe1FxsAwAAAAAAAAAAAAAAAAAAAMB7N9ucbJ6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Uk9Q6/I4nGDdNoAAAAASUVORK5CYII=",
      },
      {
        cityName: "Barcelona",
        country: "Spain",
        flag:
          "data:image/png;base64,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",
      },
      {
        cityName: "Milan",
        country: "Italy",
        flag:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAeFBMVEX///8AkkbOKzcAAAAAfj0Ajj5/u5TegYbNHy7VLTlMEBTs7Oy/v78LCwsAlUcABgMJAgMAh0G/KDMAbTWaICkAGAwWBQYAdTgAhDp2rYnz8PLu8/LNeHy+HivFKTVHDxMAXy1fjG+mYWWaGCI4DA8AIRAcBggmCArU4L4vAAABNUlEQVR4nO3Qx2ECQQAEsIUlmOQDk5PJ0H+H8KWA+UklqCwr31alrmchm+1ulLI/HP8y/k+11M5vK6PbKzn9n3bGYOjEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTpw4ceLEiRMnTsInIeGTQcjnpDnPUy7jnOttEXKv5dHkTHKmMc/XG4OYJDtdQw91AAAAAElFTkSuQmCC",
      },
    ],
  },
];
