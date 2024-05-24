let tipo=[
    {
        NombreTipo:"Nacional",
        CostoXMinuto:"1.2"
    },
    {
        NombreTipo:"Internacional",
        CostoXMinuto:"1.5"
    },
    {
        NombreTipo:"Local",
        CostoXMinuto:".5"
    },

];

let usuarios=[
    {
      ClaveU: 'U003',
      NombreU: 'Alvaro',
      AppU: 'López',
      ApmU: 'Pringles',
      FechaRegistro: new Date('2024-06-01'),
      FechaNac: '2004-06-01',
      Telefonos: ['1112221212','1113331313'],
      Llamadas: []
    },
    {
        ClaveU: 'U004',
        NombreU: 'Daniel',
        AppU: 'Astrid',
        ApmU: 'Zamarripa',
        FechaRegistro: new Date('2024-06-02'),
        FechaNac: '2003-06-02',
        Telefonos: ['1114441414','1115551515'],
        Llamadas: []
      }
];

db.tipollamadas.insertMany(tipo);
db.registrollamadas.insertMany(usuarios);