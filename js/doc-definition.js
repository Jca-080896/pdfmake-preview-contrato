// FORMATO DE CONTRATO EMPRESA FISCAL SERVICIOS, ENLACES E INTERNET DE OCCIDENTE

var dd = {
  pageSize: 'LETTER',
  pageMargins: [20, 10, 20, 20],
  content: [
      
      // pagina 1
    // encabezado 
    {
      style: 'tableExample',
      table: {
        widths: ['30%', '70%'],
        body: [
          [
            '',
            {
              stack: [
                { text: 'NET2ALLIANCE', bold: true },
                { text: 'Atomic Data S.A.', bold: true },
                { text: 'ADA1809187I2', bold: true },
                { text: 'calle Indiana 260 Piso 9  Desp.902', bold: true },
                { text: 'Col. Ciudad de los Deportes C.P. 03710', bold: true },
                { text: 'Ciudad de México' }
              ],
              alignment: 'right'
            }
          ]
        ]
      }
    },
    // suscriptor
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ['*'],
        body: [
          [
            {text: 'SUSCRIPTOR', bold: true, alignment: 'center', fillColor: '#F1F4F9', border: [true, true, true, false]}
          ]
        ]
      }
    },
    // tipo de persona
    {
      table: {
        widths: ['30%', '70%'],
        body: [
          [
            { text: 'TIPO DE PERSONA:', border: [true, true, true, false], margin: [0, 2, 0, 0]},
            {
              columns: [
                {
                  canvas: [{ type: 'rect', x: 8, y: 3, w: 18, h: 8 }], width: 1
                },
                { text: 'PERSONA FÍSICA', margin: [35, 2, 0, 0]},
                {
                  canvas: [{ type: 'rect', x: 8, y: 3, w: 18, h: 8 }], width: 1
                },
                { text: 'PERSONA MORAL', margin: [35, 2, 0, 0]}
              ],
               border: [true, true, true, false]
            },
          ]
        ]
      }
    },
    // razon social
    {
      table: {
        widths: ['30%', '70%'],
        body: [
          [
            { text: 'DENOMINACIÓN O RAZÓN SOCIAL:' },
            { text: '' ,border: [false, true, true, true]}
          ]
        ]
      }
    },
    // representante legal
    {
      table: {
        widths: ['30%', '23.5%', '23.5%', '23%'],
        body: [
          [
            {text: 'REPRESENTANTE LEGAL', margin: [-1,-1,-1,-1], border: [true, false, false, false]},
            { text: '' , border: [true, false, false, false]},
            { text: '' , border: [true, false, true, false]},
            { text: '' , border: [true, false, true, false]},
          ]
        ]
      }
    },
    // representante legar p2
    {
      table: {
         widths: ['30%', '23.5%', '23.5%', '23%'],
        body: [
          [
            { text: '' , border: [true, false, true, true]},
            { text: 'Nombre', bold: true, alignment: 'center', fillColor: '#F1F4F9' },
            { text: 'Apellido Paterno', bold: true, alignment: 'center' ,fillColor: '#F1F4F9'},
            { text: 'Apellido Materno', bold: true, alignment: 'center' ,fillColor: '#F1F4F9'}
          ]
        ]
      }
    },
    //domicilio
    {
      margin: [0, 5, 0, 0],
      table: {
      widths: ['28%', '6%', '5%', '29%', '17%', '*', '*'],
      body: [
          [
            { text: 'DOMICILIO', colSpan: 7, bold: true,  alignment: 'center', fillColor: '#F1F4F9', border: [true, true, true, true]},
            {}, {}, {}, {}, {}, {}
          ],
          [
            {}, {}, {}, {}, {}, {}, {}
          ],
          [
            { text: 'Calle', bold: true, alignment: 'center', fillColor: '#F1F4F9' },
            { text: '# Ext', bold: true, alignment: 'center', fillColor: '#F1F4F9' },
            { text: '# Int', bold: true, alignment: 'center', fillColor: '#F1F4F9' },
            { text: 'Colonia', bold: true, alignment: 'center', fillColor: '#F1F4F9' },
            { text: 'Alcaldía/Municipio', bold: true, alignment: 'center', fillColor: '#F1F4F9' },
            { text: 'Estado', bold: true, alignment: 'center', fillColor: '#F1F4F9' },
            { text: 'C.P:', bold: true, alignment: 'center', fillColor: '#F1F4F9' }
          ],
          [
            {
              columns: [
                { text: 'Teléfono Fijo', bold: true },
                {
                  canvas: [{ type: 'rect', x: -15, y: 2, w: 18, h: 7 }],
                  width: 1
                },
                { text: 'Móvil', bold: true ,  margin: [10, 0, 0, 0] },
                {
                  canvas: [{ type: 'rect', x: -35, y: 2, w: 18, h: 7 }],
                  width: 1
                }
              ],
              colSpan: 1
            },
            { text: '' , colSpan: 3}, {}, {},
            { text: 'RFC', bold: true, fillColor: '#F1F4F9' },
            { text: '', colSpan: 2 },
            {}
          ]
        ]
      }
    },
    //servicios contratos
    {
      margin: [0, 5, 0, 0],
      table: {
        widths: ['22%', '18%', '18%', '22%', '20%'],
        body: [
          [
            {
              text: 'SERVICIOS CONTRATADOS',
              colSpan: 5,
              alignment: 'center',
              bold: true,
              fontSize: 10,
              fillColor: '#F1F4F9'
            },
            {}, {}, {}, {}
      ],

      //checks superiores
      [
        {
          colSpan: 5,
                columns: [
                {  canvas: [{ type: 'rect', x: 8, y: 3, w: 18, h: 8 }],
                   width: 1},
                { text: 'TELEVISIÓN RESTRINGIDA', bold: true, margin: [30,2,2,0] },
    
                {  canvas: [{ type: 'rect', x: -27, y: 3, w: 18, h: 8 }],
                   width: 1 },
                { text: 'INTERNET FIJO EN CASA', bold: true, margin: [-6,2,20,0] },
    
                {  canvas: [{ type: 'rect', x: -70, y: 3, w: 18, h: 8 }],
                   width: 1 },
                { text: 'TELEVISIÓN RESTRINGIDA E INTERNET FIJO EN CASA', bold: true, margin: [-49,2,1,0] }
              ],
              fillColor: '#F1F4F9'
            },
            {}, {}, {}, {}
          ],
        ]
      }
    },
    {
      margin: [0, 0, 0, 0],
      table: {
        widths: ['20%', '25%', '17%', '16%', '22%'],
        body: [
          //folio tarifa
          [
            {
              text: 'DESCRIPCIÓN\nPAQUETE/OFERTA\n(INCISO I) Nom numeral 5.1.2.1)',
              bold: true, alignment: 'center', fillColor: '#F1F4F9', margin: [0,10,0,0], border: [true, false, true, false]
            },
            { 
              text: 'FOLIO:', bold: true, fillColor: '#F1F4F9', margin: [0,20,0,0], border: [false, false, false, false]
            },
            { 
              text: 'TARIFA', bold: true, alignment: 'center', fillColor: '#F1F4F9', margin: [0,10,0,0], border: [false, false, false, false]
            },
            {
              text: 'FECHA DE PAGO\nModalidad\nmensualidades\nfijas POR\nADELANTADO', alignment: 'center', bold: true, fillColor: '#F1F4F9',
              border: [true, false, true, true]
            },
            {
              text: '', bold: true, margin: [0,20,0,0], border: [false, false, true, false]
            }
          ]
        ]
      }
    },
    //vigencia de contrato
    {
      table: {
        widths: ['20%', '25%', '17%', '16%', '22%'],
        body: [
          [
            {
              text: '', bold: true, alignment: 'center',  border: [true, true, false, false]
            },
            { 
              text: '',  bold: true, fillColor: '#F1F4F9', border: [true, false, false, false]
            },
            { 
              text: '',  bold: true, alignment: 'center', fillColor: '#F1F4F9',
              border: [false, false, false, false]
            },
            {
              text: 'VIGENCIA DEL\nCONTRATO', alignment: 'center', bold: true, fillColor: '#F1F4F9',
              border: [true, false, true, false]
            },
            {
              stack: [
                {
                  columns: [
                    {  canvas: [{ type: 'rect', x: 10, y: 3, w: 18, h: 8 }], width: 30},
                    { text: 'INDEFINIDO.\n • SIN PENALIDAD', bold: true , margin: [5,3,0,0] , border: [true, true, true, true]},
                  ]
                }
              ], border: [true, true, true, false]
            }
          ],
            //mensualidad
          [
            { text: '', border: [true, false, true, true]},
            { text: 'Total Mensualidad', bold: true , fillColor: '#F1F4F9', border: [false, false, true, true]},
            { text: '$\nM.N.', bold: true , margin: [0,10,0,0], border: [false, true, true, false]},
            { text: 'PENALIDAD', bold: true, alignment: 'center', margin: [0,23,0,0], border: [false, true, false, false] },
            {
              stack: [
                {
                  columns: [
                    {  canvas: [{ type: 'rect', x: 10, y: 3, w: 18, h: 8 }],
                   width: 30},
                    { text: ' PLAZO FORZOSO \n • PAGANDO EL 20% DEL MONTO TOTAL DE LOS MESES', bold: true }
                  ]
                }
              ], border: [true, false, true, false]
            }
          ],
              // reconexion y penalidad
              [
                {},
                {
              stack: [
                {
                  text: 'Aplica Tarifa por Reconexión:', bold: true, margin: [0, 0, 0, 5]
                },
                {
                  columns: [
                    {
                      width: 'auto', text: 'SI', bold: true, margin: [0, 2, 5, 0]
                    },
                    {
                      width: 25,
                      canvas: [
                         { type: 'rect', x: 1, y: 3, w: 18, h: 8 }
                      ]
                    },
                    {
                      width: 'auto', text: 'NO', bold: true, margin: [0, 2, 5, 0]
                    },
                    {
                      width: 25,
                      canvas: [
                        { type: 'rect', x: 1, y: 3, w: 18, h: 8 }
                      ]
                    }
                  ]
                }
              ]
            },
            { text: '$\nM.N.', bold: true, margin: [0,9,0,0] },
            { text: '' , border: [false, false, false, false]},
            { text: '\nPENDIENTES POR\nCUBRIR RELATIVOS\nAL PLAZO FORZOSO',bold: true, margin: [30,-15,0,0], border: [true, false, true, true]}
          ],

          //nota inferior
          [
            {
              text: 'En el Estado de cuenta y/o factura se podrá visualizar la fecha de corte del servicio y fecha de pago.',
              colSpan: 5,
              alignment: 'center',
              bold: true
            },
            {}, {}, {}, {}
          ]
        ]
      }
    },
    //tablas 
    {
      margin: [0, 5, 0, 0],
      columns: [
        //izquierda
        {
          width: '50%',
          table: {
            widths: ['20%', '29%', '18%', '29%'],
            body: [
              [
                { text: 'EQUIPO ENTREGADO EN:  COMODATO', colSpan: 4, alignment: 'center',  bold: true, fillColor: '#F1F4F9'},
                {}, {}, {}
              ],
              [
                {
                  text: 'Decodificador',
                  colSpan: 2,
                  alignment: 'center',
                  bold: true,
                  fillColor: '#F1F4F9'
                },
                {},
                {
                  text: 'Modem',
                  colSpan: 2,
                  alignment: 'center',
                  bold: true,
                  fillColor: '#F1F4F9'
                },
                {}
              ],

            [
              { text: 'Marca:', bold: true, fillColor: '#F1F4F9' },
              { text: '' },
              { text: 'Marca:', bold: true, fillColor: '#F1F4F9' },
              { text: '' }
            ],
            [
              { text: 'Modelo:', bold: true, fillColor: '#F1F4F9' },
              { text: '' },
              { text: 'Modelo:', bold: true, fillColor: '#F1F4F9' },
              { text: '' }
            ],
            [
              { text: 'Número de Serie:', bold: true, fillColor: '#F1F4F9' },
              { text: '' },
              { text: 'Número de Serie:', bold: true, fillColor: '#F1F4F9' },
              { text: '' }
            ],
            [
              { text: 'Número de Equipos:', bold: true, fillColor: '#F1F4F9' },
              { text: '' },
              { text: 'Número de Equipos:', bold: true, fillColor: '#F1F4F9' },
              { text: '' }
            ]
    
            ]
          }
        },
        { width: 1, text: '' },
        
        //derecha
        {
          width: '50%',
          table: {
            widths: ['35%', '30%', '15%', '20%'],
            body: [
              [
                { text: 'INSTALACIÓN DEL EQUIPO', colSpan: 4, alignment: 'center', bold: true, fillColor: '#F1F4F9' },
                {}, {}, {}
              ],
              [
                { text: 'Domicilio\nInstalación:', bold: true },
                { colSpan: 3, text: '' },
                {}, {}
              ],
              [
                { text: 'Fecha:', bold: true },
                { text: '' },
                { text: 'Hora:', bold: true },
                { text: '' }
              ],
              [
                { text: 'Costo:', bold: true },
                { text: '$', bold: true },
                { colSpan: 2, text: '' },
                {}
              ],
              [
                {
                  colSpan: 4,
                  text: '"EL PROVEEDOR" deberá efectuar las instalaciones y empezar a prestar el servicio en un plazo que no exceda de 10 días hábiles a partir de la firma del contrato.',
                  margin: [0, 0, 0, 15]
                },
                {}, {}, {}
              ]
            ]
          }
        }
      ]
    },
    //pagare
    {
      margin: [0, 5, 0, 0],
      table: {
        widths: ['*'],
        body: [
          [
            {
              text: 'Garantía de cumplimiento de obligación en comodato:',
              bold: true,
              alignment: 'center',
              fillColor: '#F1F4F9'
            }
          ],
          [
            {
              text: 'Pagaré para garantizar la devolución del equipo entregado en comodato. Visible en el anexo de la presente carátula y contrato de adhesión',
              fontSize: 8.5
            }
          ],
          [
            {
              text: 'PAGARÉ', bold: true, fontSize: 14,  fillColor: '#F1F4F9', alignment: 'center', margin: [0, 2, 0, 2]
            }
          ],
          [
            {
              text: [
                'Por el presente pagaré reconozco deber y me obligo a pagar incondicionalmente a ',
                { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V., ', bold: true },
                'en su domicilio, la cantidad que resulte de la multiplicación del precio de cada equipo por el número de equipos dados en comodato para la prestación del (los) servicio(s) contratado(s) y que, al finalizar el contrato, no sean devueltos en las mismas condiciones funcionales en que me fueron entregados, conforme a lo siguiente $1,200.00 (Un mil doscientos pesos 00/100 M.N.) por cada equipo entregado en comodato. Este pagaré no podrá cobrarse de manera autónoma a lo establecido en el presente contrato de adhesión.'
              ],
              alignment: 'justify',  border: [true, false, true, false]
            }
          ],
          [
            {
              margin: [0, 2, 0, 0],
              stack: [
                {
                  columns: [
                    { text: 'ACEPTO:', width: 'auto', bold: true },
                    {
                      canvas: [
                        { type: 'line', x1: 0, y1: 12, x2: 400, y2: 12, lineWidth: 1 }
                      ]
                    }
                  ]
                },
                {
                  text: 'Nombre y firma del usuario',
                  alignment: 'center',
                  margin: [0, 0, 0, 0]
                }
              ],border: [true, false, true, true]
            }
          ]
        ]
      }
    },


    // Sección 2
    // encabezado
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                '',
                {
                  stack: [
                    { text: '' },
                    { text: 'ZONA INTERNET', bold: true },
                    { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                    { text: 'RFC: SEI220504HW4', bold: true },
                    { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                    { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                    { text: '' }
                  ],
                  alignment: 'right'
                }
              ]
            ]
          }
        },
    //metodo de pago
    {
      margin: [0, 8, 0, 0],
      table: {
        widths: ['35%', '65%'],
        body: [
          [
            {
              text: 'MÉTODO DE PAGO',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              border: [true, true, true, true]
            },
            {}
          ],
    
          // SUBTÍTULO DERECHO
          [
            {
              text: '',
              border: [true, false, true, false]
            },
            {
              text: 'Datos para el método de pago elegido.',
              alignment: 'center',
              bold: true,
              border: [true, false, true, false]
            }
          ],
            //opciones
          [
            {
              stack: [
    
                {
                  columns: [
                    {
                      width: 1,
                      canvas: [
                        { type: 'rect', x: 2, y: 2, w: 18, h: 8, lineWidth: 1 }
                      ]
                    },
                    { text: 'Efectivo', margin: [25, 0, 0, 0], bold: true }
                  ],
                },
    
                {
                  columns: [
                    {
                      width: 1,
                      canvas: [
                        { type: 'rect', x: 2, y: 2, w: 18, h: 8, lineWidth: 1 }
                      ]
                    },
                    { text: 'Cheque', margin: [25, 0, 0, 0], bold: true }
                  ],
                },
    
                {
                  columns: [
                    {
                      width: 1,
                      canvas: [
                       { type: 'rect', x: 2, y: 2, w: 18, h: 8, lineWidth: 1 }
                      ]
                    },
                    { text: 'Domiciliado con Tarjeta', margin: [25, 0, 0, 0], bold: true }
                  ],
                },
                {
                  columns: [
                    {
                      width: 1,
                      canvas: [
                        { type: 'rect', x: 2, y: 2, w: 18, h: 8, lineWidth: 1 }
                      ]
                    },
                    { text: 'Transferencia Bancaria', margin: [25, 0, 0, 0], bold: true }
                  ],
                },
    
                {
                  columns: [
                    {
                      width: 1,
                      canvas: [
                        { type: 'rect', x: 2, y: 2, w: 18, h: 8, lineWidth: 1 }
                      ]
                    },
                    { text: 'Depósito a cuenta Bancaria',margin: [25, 0, 0, 0], bold: true }
                  ],
                }
    
              ],
              border: [true, false, true, true]
            },
            {
              text: '',
              border: [true, true, true, true]
            }
          ]
    
        ]
      }
    },
    
    //autorizacion tarjeta
    {
      margin: [0, 5, 0, 0],
      table: {
        widths: ['20%', '40%', '20%', '20%'],
        body: [
          [
            {
              text: 'AUTORIZACIÓN PARA CARGO DE TARJETA DE CRÉDITO O DÉBITO',
              colSpan: 4,
              alignment: 'center',
              bold: true,
              fillColor: '#F1F4F9',
              border: [true, true, true, true]
            },
            {}, {}, {}
          ],
    [
      {
        colSpan: 4,
        border: [true, false, true, false],
        stack: [
    
          // parrafo
          {
            text: [
              'Por medio de la presente  SÍ           ',
              ' NO           ',
              ' autorizo a "EL PROVEEDOR", para que cargue a mi tarjeta de crédito o débito, la cantidad por concepto de servicios que mensualmente me presta. La vigencia de los cargos será por ',
              '____________________',
              ' meses.'
            ],
            alignment: 'justify'
          },
    
          // pociones
          {
            margin: [119, -22, 0, 0],
            canvas: [
              { type: 'rect', x: 0, y: 0, w: 16, h: 8, lineWidth: 1 }
            ]
          },
          {
            margin: [156, -8, 0, 0],
            canvas: [
              { type: 'rect', x: 0, y: 0, w: 16, h: 8, lineWidth: 1 }
            ]
          },
          // firma
          {
            margin: [0, 25, 0, 5],
            stack: [
              {
                canvas: [
                  { type: 'line', x1: 150, y1: 0, x2: 400, y2: 0, lineWidth: 1 }
                ]
              },
              {
                text: 'Firma',
                alignment: 'center',
                bold: true
              }
            ]
          }
        ]
      },
      {}, {}, {}
    ],
    
          // banco y numero de tarjeta
          [
            {
              text: 'Banco:',
              bold: true,
              border: [true, true, true, true]
            },
            {
              text: '',
              border: [true, true, true, true]
            },
            {
              text: 'Número de Tarjeta:',
              bold: true,
              border: [true, true, true, true]
            },
            {
              text: '',
              border: [true, true, true, true]
            }
          ]
        ]
      }
    },
    
    //servicios adicionales
    {
      margin: [0, 5, 0, 0],
      table: {
        widths: ['4%', '35%', '10%', '5%', '35%', '11%'],
        body: [
          [
            {
              text: 'SERVICIOS ADICIONALES',
              colSpan: 6,
              alignment: 'center',
              bold: true,
              fillColor: '#F1F4F9',
              border: [true, true, true, true]
            },
            {}, {}, {}, {}, {}
          ],
    
          // numeros
          [
            { text: '1.', bold: true, fillColor: '#F1F4F9', border: [true, true, false, false] },
            { text: '', border: [true, true, true, false] },
            { text: '', border: [true, true, true, false] },
    
            { text: '2.', bold: true, fillColor: '#F1F4F9', border: [true, true, true, false] },
            { text: '', border: [true, true, true, false] },
            { text: '', border: [true, true, true, false] }
          ],
    
          // subencabezado
          [
            { text: '',fillColor: '#F1F4F9', border: [true, true, true, true] },
            { text: 'DESCRIPCIÓN:', bold: true, fillColor: '#F1F4F9', border: [false, true, true, false] },
            { text: 'COSTO:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, false] },
    
            { text: '',  fillColor: '#F1F4F9', border: [true, true, true, false] },
            { text: 'DESCRIPCIÓN:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, false] },
            { text: 'COSTO:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, false] }
          ],
    
          // area 
          [
            {
              text: '',
              colSpan: 3,
              margin: [0, 5, 0, 0],
              border: [true, true, true, true]
            },
            {}, {},
    
            {
              text: '',
              colSpan: 3,
              margin: [0, 5, 0, 0],
              border: [true, true, true, true]
            },
            {}, {}
          ]
        ]
      }
    },
    
    //conseptos facturables 
    {
      margin: [0, 5, 0, 0],
      table: {
        widths: ['4%', '35%', '10%', '5%', '35%', '11%'],
        body: [
          [
            {
              text: 'CONCEPTOS FACTURABLES\n(Ejemplo: Costo por cambio de domicilio, Costos administrativos adicionales)',
              colSpan: 6,
              alignment: 'center',
              bold: true,
              fillColor: '#F1F4F9',
              border: [true, true, true, true]
            },
            {}, {}, {}, {}, {}
          ],
    
          // numeros
          [
            { text: '1.', bold: true, fillColor: '#F1F4F9', border: [true, true, false, false] },
            { text: '', border: [true, true, true, false] },
            { text: '', border: [true, true, true, false] },
    
            { text: '2.', bold: true, fillColor: '#F1F4F9', border: [true, true, true, false] },
            { text: '', border: [true, true, true, false] },
            { text: '', border: [true, true, true, false] }
          ],
    
          // subencabezados
          [
            { text: '',fillColor: '#F1F4F9', border: [true, true, true, true] },
            { text: 'DESCRIPCIÓN:', bold: true, fillColor: '#F1F4F9', border: [false, true, true, false] },
            { text: 'COSTO:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, false] },
    
            { text: '',  fillColor: '#F1F4F9', border: [true, true, true, false] },
            { text: 'DESCRIPCIÓN:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, false] },
            { text: 'COSTO:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, false] }
          ],
    
          // area
          [
            {
              text: '',
              colSpan: 3,
              margin: [0, 5, 0, 0],
              border: [true, true, true, true]
            },
            {}, {},
    
            {
              text: '',
              colSpan: 3,
              margin: [0, 5, 0, 0],
              border: [true, true, true, true]
            },
            {}, {}
          ]
        ]
      }
    },

    //envio de correo
    {
      margin: [0, 5, 0, 5],
      table: {
        widths: ['9%', '17%', '16%', '19%', '18%', '21%'],
        body: [
          [
            {
              text: 'EL SUSCRIPTOR AUTORIZA SE LE ENVÍE POR CORREO ELECTRÓNICO',
              colSpan: 6, alignment: 'center', bold: true, fillColor: '#F1F4F9',
              border: [true, true, true, true]
            },
            {}, {}, {}, {}, {}
          ],
          [
            { text: 'Factura', bold: true, fillColor: '#F1F4F9', border: [true, true, true, true]},
            {
              stack: [
                {
                  columns: [
                    { text: 'SI', bold: true },
                    { canvas: [{ type: 'rect', x: -10, y: 2, w: 18, h: 8 }] },
                    { text: ' NO', bold: true, margin: [-8,0,0,0] },
                    { canvas: [{ type: 'rect', x: -10, y: 2, w: 18, h: 8 }] }
                  ],
                  columnGap: 5
                }
              ],
              border: [true, true, true, true]
            },
            { text: 'Carta de Derechos\nMínimos', bold: true, alignment: 'center', fillColor: '#F1F4F9', border: [true, true, true, true] },
    
            {
              stack: [
                {
                  columns: [
                    { text: ' SI', bold: true },
                    { canvas: [{ type: 'rect', x: -12, y: 2, w: 18, h: 8 }] },
                    { text: 'NO', bold: true, margin: [-3,0,0,0] },
                    { canvas: [{ type: 'rect', x: -10, y: 2, w: 18, h: 8 }] }
                  ],
                  columnGap: 5
                }
              ],
              border: [true, true, true, true]
            },
            { text: 'Contrato de Adhesión', bold: true, alignment: 'center', fillColor: '#F1F4F9', border: [true, true, true, true]},
            {
              stack: [
                {
                  columns: [
                    { text: 'SI', bold: true , margin: [10,0,0,0] },
                    { canvas: [{ type: 'rect', x: -6, y: 2, w: 18, h: 8 }] },
                    { text: ' NO', bold: true, margin: [-5,0,0,0] },
                    { canvas: [{ type: 'rect', x: -16, y: 2, w: 18, h: 8 }] }
                  ],
                  columnGap: 5
                }
              ],
              border: [true, true, true, true]
            }
          ],
          [
            {
              text: 'CORREO ELECTRÓNICO\nAUTORIZADO:', fillColor: '#F1F4F9',
              bold: true, alignment: 'center', border: [true, true, true, true], colSpan: 2
            },
            {},
            {
              text: '', colSpan: 2, border: [true, true, true, true]
            },
            {},
            {
              text: 'FIRMA\nSUSCRIPTOR', fillColor: '#F1F4F9',
              bold: true, alignment: 'center', border: [true, true, true, true]
            },
            {
              text: '', border: [true, true, true, true]
            }
          ]
        ]
      }
    },
    
    //uso de informacion
    {
      margin: [0, 1, 0, 0],
      table: {
        widths: ['100%'],
        body: [
          [
            {
              text: 'AUTORIZACIÓN PARA USO DE INFORMACIÓN DEL SUSCRIPTOR',
              alignment: 'center',
              bold: true,
              fillColor: '#F1F4F9',
              border: [true, true, true, true]
            }
          ],
          [
            {
              border: [true, false, true, false],
              stack: [
                {
                  text: [
                    '1.   El Suscriptor   SI     ',
                    '     ',
                    '   NO       ',
                    '     autoriza que su información sea cedida o transmitida por el proveedor a terceros con fines',
                    '     mercadotécnicos o publicitarios.  FIRMA '
                  ],
                  alignment: 'justify'
                },
                {
                  margin: [155, -18, 0, 0],
                  canvas: [
                    { type: 'rect', x: -65, y: -3, w: 18, h: 8, lineWidth: 1 }
                  ]
                },
                {
                  margin: [225, -10, 0, 0],
                  canvas: [
                    { type: 'rect', x: -87, y: 1.5, w: 18, h: 8, lineWidth: 1 }
                  ]
                },
                {
                  margin: [160, 2, 0, 0],
                  canvas: [
                    { type: 'line', x1: 0, y1: 12, x2: 160, y2: 12, lineWidth: 1 }
                  ]
                }
              ]
            }
          ],
          [
            {
              border: [true, false, true, true],
              stack: [
    
                {
                  text: [
                    '2.   El suscriptor acepta   SI       ',
                    '     ',
                    '   NO       ',
                    '      recibir llamadas del proveedor de promociones de servicios o paquetes.\n',
                    '   FIRMA'
                  ],
                  alignment: 'justify'
                },
                {
                  margin: [115, -20, 0, 0],
                  canvas: [
                    { type: 'rect', x: 0, y: 0, w: 18, h: 8, lineWidth: 1 }
                  ]
                },
                {
                  margin: [160, -8, 0, 0],
                  canvas: [
                    { type: 'rect', x: 0, y: 0, w: 18, h: 8, lineWidth: 1 }
                  ]
                },
                {
                  margin: [30, -1, 0, 0],
                  canvas: [
                    { type: 'line', x1: 0, y1: 12, x2: 160, y2: 12, lineWidth: 1 }
                  ]
                }
              ]
            }
          ]
        ]
      }
    },
    
    //medios de contracto
    {
      margin: [0, 5, 0, 5],
      table: {
        widths: ['25%', '40%', '35%'],
        body: [
          [
            {
              text: 'MEDIOS DE CONTACTO DEL PROVEEDOR PARA QUEJAS, ACLARACIONES, CONSULTAS Y CANCELACIONES',
              colSpan: 3,
              alignment: 'center',
              bold: true,
              fillColor: '#F1F4F9',
              border: [true, true, true, true]
            },
            {}, {}
          ],
          [
            { text: 'TELÉFONO:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, true] },
            { text: '331 518 1035', border: [true, true, true, true] },
            { text: 'Disponible las 24 horas todos los días del año', border: [true, true, true, true] }
          ],
          [
            { text: 'CORREO ELECTRÓNICO:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, true] },
            { 
              text: 'serviciosyenlaces@hotmail.com',
              color: 'blue',
              decoration: 'underline',
              border: [true, true, true, true]
            },
            { text: 'Disponible las 24 horas, todos los días del año', border: [true, true, true, true] }
          ],
          [
            { text: 'CENTROS DE ATENCIÓN A CLIENTES:', bold: true, fillColor: '#F1F4F9', border: [true, true, true, true] },
            { 
              text: 'Consultar horarios disponibles, días disponibles y centros de atención a clientes disponibles en teléfono 331 518 1035',
              colSpan: 2,
              border: [true, true, true, true]
            },
            {}
          ]
        ]
      }
    },
    
    //disponibilidad
    {
      margin: [0, 1, 0, 0],
      table: {
        widths: ['35%', '65%'],
        body: [
          [
            {
              text: 'LA PRESENTE CARÁTULA Y EL CONTRATO DE ADHESIÓN SE ENCUENTRAN DISPONIBLES EN:',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fillColor: '#F1F4F9',
              border: [true, true, true, true]
            },
            {}
          ],
            [ {}, {} ],
          [
            { text: 'Buró comercial de PROFECO', bold: true, border: [true, true, true, true] },
            { 
              text: 'https://burocomercial.profeco.gob.mx/',
              color: 'blue',
              decoration: 'underline',
              border: [true, true, true, true]
            }
          ],
          [
            { text: 'Físicamente en los centros de atención del proveedor', bold: true, border: [true, true, true, true] },
            { 
              text: 'Consultar centros de atención a clientes en teléfono 331 518 1035',
              border: [true, true, true, true]
            }
          ]
        ]
      }
    },
    
    
    // Sección 3

    {
      style: 'tableExample',
      table: {
        widths: ['30%', '70%'],
        body: [
          [
            '',
            {
              stack: [
                { text: '' },
                { text: 'ZONA INTERNET', bold: true },
                { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                { text: 'RFC: SEI220504HW4', bold: true },
                { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                { text: '' }
              ],
              alignment: 'right'
            }
          ]
        ]
      }
    },
        
     //legal
    {
      margin: [0, 5, 0, 5],
      table: {
        widths: ['100%'],
        body: [
          [
            {
              stack: [
    
                {
                  text: [
                    'LA PRESENTE CARÁTULA SE RIGE CONFORME A LAS CLÁUSULAS DEL CONTRATO DE ADHESIÓN REGISTRADO EN\nPROFECO EL ___/___/2026, CON NÚMERO: _____/2026 DISPONIBLE EN LA SIGUIENTE LIGA',
                    {
                      text: '\nhttps://burocomercial.profeco.gob.mx/',
                      color: 'blue',
                      decoration: 'underline'
                    }
                  ],
                  bold: true
                },
    
                {
                  margin: [0, 10, 0, 10],
                  text: 'SCAN ME',
                  alignment: 'left'
                },
    
                {
                  text: 'LAS FIRMAS ELECTRÓNICAS INSERTAS ABAJO SON LA ACEPTACIÓN DE LA PRESENTE CARÁTULA Y CLAUSULADO DEL CONTRATO CON NÚMERO __________',
                  bold: true,
                  margin: [0, 10, 0, 0]
                }
    
              ],
              border: [true, true, true, true]
            }
          ]
        ]
      }
    },
    
    //fechas y firmas
    {
      margin: [0, 10, 0, 5],
      stack: [
    
        {
          text: 'Este contrato se firmó por duplicado en la Ciudad de _______________, a ___ de ____________ de ______.',
          margin: [0, 5, 0, 0]
        },
    
        {
          columns: [
            {
              width: '50%',
              stack: [
                {
                  canvas: [
                    { type: 'line', x1: 40, y1: 0, x2: 250, y2: 0, lineWidth: 1 }
                  ],  margin: [0, 20, 0, 0]
                },
                {
                  text: 'PROVEEDOR',
                  alignment: 'center',
                  bold: true,
                  margin: [0, 20, 0, 0]
                }
              ]
            },
            {
              width: '50%',
              stack: [
                {
                  canvas: [
                    { type: 'line', x1: 40, y1: 0, x2: 250, y2: 0, lineWidth: 1 }
                  ],  margin: [0, 20, 0, 0]
                },
                {
                  text: 'SUSCRIPTOR',
                  alignment: 'center',
                  bold: true,
                  margin: [0, 20, 0, 0]
                }
              ]
            }
          ]
        }
      ]
    },

    // Sección 4
    
    {
      style: 'tableExample',
      table: {
        widths: ['30%', '70%'],
        body: [
          [
            '',
            {
              stack: [
                { text: '' },
                { text: 'ZONA INTERNET', bold: true },
                { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                { text: 'RFC: SEI220504HW4', bold: true },
                { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                { text: '' }
              ],
              alignment: 'right'
            }
          ]
        ]
      }
    },
        
    //contrato y declaraciones
    {
      margin: [0, 50, 0, 5],
      stack: [
        {
          text: 'CONTRATO DE PRESTACIÓN DE SERVICIO DE TELEVISIÓN RESTRINGIDA Y/O INTERNET FIJO EN CASA QUE CELEBRA POR UNA PARTE EL PROVEEDOR Y POR OTRA PARTE EL SUSCRIPTOR, AL TENOR DE LO SIGUIENTE.',
          bold: true,
          alignment: 'justify',
        },
        {
          text: 'D E C L A R A C I O N E S',
          bold: true,
          alignment: 'center',
          margin: [0, 3, 0, 5]
        },
        {
          text: '1.    Ambas partes declaran:',
          margin: [5, 3, 0, 4]
        },
        {
          text: 'a)    Que los datos consistentes en el domicilio, RFC y datos de localización del domicilio son ciertos y se encuentran establecidos en la',
          alignment: 'justify',
          margin: [15, 0, 0, 0]
        },
        {
          text: '       la carátula del presente contrato',
          alignment: 'justify',
          margin: [33, 0, 0, 5]
        },
        {
          text: 'b)    Que tienen pleno goce de sus derechos y capacidad legal para contratar y obligarse en términos del presente contrato.',
          alignment: 'justify',
          margin: [15, 0, 0, 5]
        },
        {
          text: [
            'c)    Que aceptan que el presente contrato se regirá por la Ley Federal de Protección al Consumidor, Ley Federal de',
            { text: 'Telecomunicaciones y Radiodifusión, la Norma Oficial Mexicana NOM-184-SCFI-2018, Elementos Normativos y Obligaciones ', italics: true },
            'Específicas que deben Observar los Proveedores para la Comercialización y/o Prestación de los Servicios de Telecomunicaciones ',
            'cuando Utilicen una Red Pública de Telecomunicaciones, y demás normatividad aplicable, por lo que los derechos y obligaciones ',
            ''
          ],
          alignment: 'justify',
          margin: [15, 0, 0, 5]
        },
        {
          text: 'd)    Que la manifestación de la voluntad para adherirse al presente contrato de adhesión y su carátula (la cual forma parte integrante del referido contrato) son las firmas que plasmen las partes en la carátula.',
          alignment: 'justify',
          margin: [15, 0, 0, 5]
        },
        {
          text: 'e)    Que el SUSCRIPTOR es el usuario final de los SERVICIOS CONTRATADOS materia de este contrato, por lo que queda expresamente prohibido subcontratar o comercializar los mismos.',
          alignment: 'justify',
          margin: [15, 0, 0, 5]
        },
        {
          text: 'f)    Que es su voluntad celebrar el presente contrato sujetándose a las siguientes:',
          alignment: 'justify',
          margin: [15, 0, 0, 15]
        },
        {
          text: 'C L Á U S U L A S',
          bold: true,
          alignment: 'center',
          margin: [0, -10, 0, 0]
        }
      ]
    },

    {
      margin: [0, 10, 0, 0],
      columns: [
    
        // columna izquierda
        {
          width: '50%',
          stack: [
    
            {
              text: [
                { text: 'PRIMERA: OBJETO DEL CONTRATO. ', bold: true },
                'EL PROVEEDOR se obliga a prestar el servicio de Televisión restringida y/o Internet fijo en casa, (en adelante el Servicio), de manera conjunta o separada, continua, uniforme, regular y eficiente, a cambio del pago de la tarifa, plan o paquete que el SUSCRIPTOR haya seleccionado en la carátula del presente contrato, los cuales no podrán ser menores a los índices y parámetros de calidad que establezca la Agencia de Transformación Digital y Telecomunicaciones y Comisión Reguladora de Telecomunicaciones (en adelante la autoridad reguladora de telecomunicaciones), ni menores a los ofrecidos implícitamente o contratados en el presente instrumento.'
              ],
              alignment: 'justify',
              margin: [5, 0, 0, 5]
            },
    
            {
              text: [
                { text: 'El presente contrato se regirá bajo el esquema de mensualidades fijas POR ADELANTADO, ', bold: true },
                'es decir se va a pagar el servicio de manera previa a utilizarlo, dicho esquema va a operar bajo los términos y condiciones del pospago exceptuando el momento de pago del servicio. Cualquier cargo por el SERVICIO comienza a partir de la fecha en la que efectivamente el PROVEEDOR inicia la prestación del SERVICIO.'
              ],
              alignment: 'justify',
              margin: [5, 0, 0, 5]
            },
    
            {
              text: 'El PROVEEDOR es el único responsable frente al SUSCRIPTOR por la prestación del SERVICIO, así como de los bienes o servicios adicionales contratados.',
             alignment: 'justify',
              margin: [5, 0, 0, 5]
            },
    
            {
              text: 'Todo lo pactado o contratado entre el SUSCRIPTOR y el PROVEEDOR de manera verbal o electrónica se le debe confirmar por escrito al SUSCRIPTOR a través de los medios físicos o electrónicos o de cualquier otra nueva tecnología que lo permita o del medio que él elija, en un plazo máximo de cinco días hábiles, contados a partir del momento en que se realice el pacto o contratación.',
              alignment: 'justify',
              margin: [5, 0, 0, 5]
            },
          ]
        },
    
        //colunma derecha
        {
          width: '50%',
          stack: [
    
            {
              text: [
                { text: 'SEGUNDA: VIGENCIA. ', bold: true },
                { text: 'Este contrato NO obliga a un plazo forzoso, ', bold: true },
                'por lo que al tener una vigencia indeterminada el SUSCRIPTOR puede darlo por terminado en cualquier momento, SIN penalidad alguna y sin necesidad de recabar autorización del PROVEEDOR, únicamente se tendrá que dar aviso a este último a través del mismo medio en el cual contrató el servicio o por los medios de contacto señalados en la carátula.'
              ],
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
    
            {
              text: 'Sin perjuicio de lo anterior, las partes pueden pactar en el presente Contrato que se establezca un Plazo Forzoso de permanencia derivado de las inversiones y equipamiento necesario para la prestación del Servicio en el domicilio del SUSCRIPTOR mismo que no excederá de 12 (DOCE) meses y en caso de que el SUSCRIPTOR solicite su terminación anticipada se obliga a pagar al PROVEEDOR el 20% del plazo forzoso pendiente por cubrir.',
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
    
            {
              text: 'El PROVEEDOR debe comunicar de manera fehaciente al SUSCRIPTOR que el plazo forzoso está por concluir con al menos 30 (treinta) días de anticipación a que termine dicho plazo, a través de la factura correspondiente, vía mensaje de texto o a través de medios físicos o electrónicos o digitales o de cualquier otra nueva tecnología que lo permita.',
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
    
            {
              text: 'Una vez cumplido el plazo forzoso, el presente contrato tendrá una vigencia indeterminada, por lo que el SUSCRIPTOR lo podrá dar por terminado en cualquier momento, sin penalización alguna y sin necesidad de recabar autorización del proveedor, únicamente dando el aviso correspondiente.',
             alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
    
            {
              text: [
                { text: 'TERCERA: EQUIPO TERMINAL. ', bold: true },
                'Los equipos y accesorios que son necesarios para recibir el SERVICIO son propiedad del'
              ],
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            }
    
          ]
        }
    
      ],
      columnGap: 20
    },
    
    // Sección 5
        
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                '',
                {
                  stack: [
                    { text: '' },
                    { text: 'ZONA INTERNET', bold: true },
                    { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                    { text: 'RFC: SEI220504HW4', bold: true },
                    { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                    { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                    { text: '' }
                  ],
                  alignment: 'right'
                }
              ]
            ]
          }
        },
        
        {
          margin: [0, 15, 0, 0],
          fontSize: 9,
          columns: [
        
            //columna izquierda
            {
              width: '50%',
              stack: [
        
                {
                  text: 'PROVEEDOR mismos que se entregan al SUSCRIPTOR en COMODATO (en préstamo). El SUSCRIPTOR se compromete a la guarda, custodia y conservación del (los) equipo(s), durante todo el tiempo que se encuentren en su poder, hasta la terminación del presente contrato y deberán ser devueltos al PROVEEDOR, presentando únicamente el desgaste natural por el paso del tiempo, y por su parte el PROVEEDOR se obliga a dar mantenimiento a los equipos y accesorios para la adecuada prestación del SERVICIO.',
                 alignment: 'justify',
                 margin: [5, 0, 0, 5]
                },
        
                {
                  text: 'Cuando las fallas que se presenten en el equipo y accesorios no sean atribuibles al SUSCRIPTOR, el PROVEEDOR se obliga a realizar de manera gratuita las reparaciones necesarias, en tanto este contrato permanezca vigente. Ambas partes deberán coordinarse para establecer la fecha y hora en que se llevarán a cabo dichas actividades. El personal designado por el PROVEEDOR se debe de identificar y mostrar al SUSCRIPTOR la orden de trabajo expedida por el PROVEEDOR.',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
        
                {
                  text: 'En caso de que el equipo terminal se encuentre en reparación o mantenimiento, el PROVEEDOR debe suspender el cobro del SERVICIO por el periodo que dure la revisión, reparación y/o mantenimiento de dicho equipo terminal, excepto cuando el PROVEEDOR acredite que el SUSCRIPTOR está haciendo uso del servicio o le haya proporcionado un equipo sustituto.',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                
                {
                  text: 'Cuando el Equipo provisto en comodato, sea robado o sea objeto de algún siniestro, el SUSCRIPTOR deberá dar aviso inmediato al PROVEEDOR, en un plazo que no excederá de veinticuatro horas posteriores al evento para la reposición del Equipo y para supender el cobro del SERVICIO hasta que el SUSCRIPTOR tenga otro equipo para poder recibir el SERVICIO.',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                
                {
                  text: 'El SUSCRIPTOR tendrá un plazo de 30 días hábiles posteriores al robo o siniestro para presentar copia certificada de la constancia correspondiente levantada ante una Autoridad Competente, que acredite el objeto de robo o siniestro para que no tenga costo la reposición del equipo.',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                
                {
                  text: 'En caso de terminación, rescisión o cancelación del presente Contrato, el SUSCRIPTOR se obliga a devolver o entregar el Equipo en Comodato al PROVEEDOR a más tardar dentro de plazo de 10(diez) días naturales contados a partir de la fecha en que notifique la terminación del Contrato.  ',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                
                {
                  text: 'Si al término o rescisión del Contrato, el SUSCRIPTOR no  devuelve al PROVEEDOR el Equipo que le fue entregado en comodato en términos de los previsto en este Contrato, se le hará efectiva la garantía de cumplimiento de obligación consistente en un pagaré que es causal y no negociable; es decir que este pagaré sólo se firma por el SUSCRIPTOR para garantizar la devolución del Equipo que le fue entregado en comodato.  ',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                
                {
                  text: 'El PROVEEDOR está obligado a realizar la devolución el pagaré establecido en la carátula al SUSCRIPTOR una vez devuelto el equipo dado en comodato ',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                
                {
                  text: 'En el momento en el que el SUSCRIPTOR realice la devolución del Equipo, el PROVEEDOR le debe proporcionar una nota de recepción, la cual deberá contener el número de teléfono, nombre del SUSCRIPTOR y nombre de la persona que lo entrega y lo recibe ',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
        
              ]
            },
        
            //coluna derecha
            {
              width: '50%',
              stack: [
        
                {
                  text: [
                    { text: 'CUARTA: ENTREGA, INSTALACIÓN Y ACTIVACIÓN. ', bold: true },
                    'La entrega, instalación y activación del equipo terminal no podrá ser mayor a 10 días hábiles a partir de la firma del presente contrato.'
                  ],
                 alignment: 'justify',
                 margin: [5, 0, 5, 5]
                },
        
                {
                  text: 'En caso de que el PROVEEDOR no pueda iniciar la prestación del servicio por causas atribuibles a él por imposibilidad física o técnica para la instalación del equipo, debe devolver al SUSCRIPTOR las cantidades que haya pagado por concepto de anticipo, en un plazo no mayor de 30 días hábiles siguientes a la fecha límite establecida para la instalación, y se tendrá por terminado el contrato de adhesión sin responsabilidad para el SUSCRIPTOR debiendo pagar el PROVEEDOR, una penalidad equivalente al 20% de las cantidades que haya recibido por concepto de anticipo, por su incumplimiento en los casos atribuibles a él.',
                 alignment: 'justify',
                 margin: [5, 0, 5, 5]
                },
        
                {
                  text: 'El SUSCRIPTOR puede negarse, sin responsabilidad alguna para él, a la instalación o activación del servicio ante la negativa del personal del PROVEEDOR a identificarse y/o a mostrar la orden de trabajo. Situación que debe informar al PROVEEDOR en ese momento.',
                 alignment: 'justify',
                 margin: [5, 0, 5, 5]
                },
        
                {
                  text: [
                    { text: 'QUINTA: TARIFAS. ', bold: true },
                    'Las tarifas del servicio se encuentran inscritas en el Registro Público de Concesiones de la Comisión Reguladora de Telecomunicaciones y pueden ser consultadas en la página de esta.'
                  ],
                 alignment: 'justify',
                 margin: [5, 0, 5, 5]
                },
                
                {
                  text: 'Las tarifas no podrán establecer condiciones contractuales tales como causas de terminación anticipada o cualquier otra condición que deba ser pactada dentro de los contratos de adhesión. De igual manera, no se podrán establecer términos y/o condiciones de aplicación de las tarifas que contravengan a lo establecido en el presente contrato de adhesión. ',
                 alignment: 'justify',
                 margin: [5, 0, 5, 5]
                },
        
                {
                  text: 'En caso de que ambas partes se sujeten a un plazo forzoso, el PROVEEDOR no puede modificar dentro de dicho plazo, el precio o tarifa contratados, bajo ningún supuesto, salvo que se trate de una disminución del precio o el incremento del paquete de servicios sin variación del precio del mismo.  ',
                  alignment: 'justify',
                  margin: [5, 0, 5, 5]
                },
                
                {
                  text: 'Los planes, paquetes, cobertura donde el PROVEEDOR puede prestar el servicio y tarifas se pueden consultar por los medios establecidos en la carátula del presente contrato. ',
                  alignment: 'justify',
                  margin: [5, 0, 5, 5]
                },
                
                {
                  text: [
                    { text: 'SEXTA: SERVICIOS ADICIONALES.', bold: true },
                    'El PROVEEDOR puede ofrecer servicios y/o productos adicionales al SERVICIO originalmente contratado siempre y cuando cuente con el consentimiento expreso del SUSCRIPTOR para tal efecto y el SUSCRIPTOR lo solicite y autorice a través de medios físicos o electrónicos o digitales o de cualquier otra nueva tecnología que lo permita.    '
                  ],
                 alignment: 'justify',
                 margin: [5, 0, 5, 5]
                },
                
                {
                  text: 'Sin embargo, el PROVEEDOR no puede obligar al SUSCRIPTOR a contratar los servicios y/o productos adicionales como requisito para la contratación o continuación de la prestación del SERVICIO originalmente contratado.',
                  alignment: 'justify',
                  margin: [5, 0, 5, 5]
                },
                
                {
                  text: 'El PROVEEDOR deberá contar con la opción de ofrecer al SUSCRIPTOR cada servicio adicional o producto por separado, debiendo dar a conocer el precio previamente a su contratación.  ',
                 alignment: 'justify',
                 margin: [5, 0, 5, 5]
                },
        
            {
                  text: 'El PROVEEDOR deberá contar con la opción de ofrecer al SUSCRIPTOR cada servicio adicional o producto por separado, debiendo dar a conocer el precio previamente a su contratación.  ',
                  alignment: 'justify',
                  margin: [5, 0, 5, 5]
                }
              ]
            }
          ],
          columnGap: 20
        },


        // Sección 6
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                '',
                {
                  stack: [
                    { text: '' },
                    { text: 'ZONA INTERNET', bold: true },
                    { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                    { text: 'RFC: SEI220504HW4', bold: true },
                    { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                    { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                    { text: '' }
                  ],
                  alignment: 'right'
                }
              ]
            ]
          }
        },

        {
          margin: [0, 15, 0, 0],
          fontSize: 9,
          columns: [
        
            //columna izquierda
            {
              width: '50%',
              stack: [
        
                {
                  text: 'PROVEEDOR tiene un plazo máximo de 5 días naturales a partir de dicha manifestación para cancelarlo, sin que ello implique la suspensión o cancelación de la prestación del SERVICIO originalmente contratado. La cancelación de los Servicios adicionales al SERVICIO originalmente contratado no exime al SUSCRIPTOR del pago de las cantidades adeudadas por los servicios adicionales utilizados.',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
        
                {
                  text: [
                    { text: 'SÉPTIMA: ESTADO DE CUENTA RECIBO Y/O FACTURA. ', bold: true },
                    'El PROVEEDOR debe entregar gratuitamente en el domicilio del SUSCRIPTOR, con al menos 10 días naturales antes de la fecha de vencimiento del plazo para el pago del SERVICIO contratado, un estado de cuenta, recibo y/o factura el cual deberá de contener de manera desglosada la descripción de los cargos, costos, conceptos y naturaleza del SERVICIO y de los servicios adicionales contratados.'
                  ],
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                
                {
                  text: 'El SUSCRIPTOR puede pactar con el PROVEEDOR para que, en sustitución de la obligación referida, pueda consultarse el citado estado de cuenta y/o factura, a través de cualquier medio físico o electrónico o digital o de cualquier otra nueva tecnología que lo permita y que al efecto se acuerde entre ambas partes.',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
        
                {
                  text: 'La fecha, forma y lugares de pago se pueden consultar por los medios señalados en la carátula del presente contrato.',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
        
                {
                  text: 'El SUSCRIPTOR se obliga a cubrir la cantidad total que ampare el estado de cuenta mensual a más tardar en la FECHA LÍMITE DE PAGO.',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                {
                  text: 'Independientemente de que el SUSCRIPTOR cubra el pago a que se refiere el párrafo anterior, contará con un plazo de 30 (treinta) días naturales a partir de la recepción del estado de cuenta, para realizar ante EL PROVEEDOR cualquier aclaración en relación con el estado de cuenta por escrito, vía electrónica y/o vía telefónica. En caso de no existir reclamación alguna dentro del plazo señalado, se estará al término de un año para la reclamación conforme a la Ley Federal de Protección al Consumidor.   ',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                {
                  text: [
                    { text: 'OCTAVA: MODIFICACIONES. ', bold: true },
                    'El PROVEEDOR dará aviso al SUSCRIPTOR, cuando menos con 15 días naturales de anticipación, de cualquier cambio en los términos y condiciones originalmente contratados. Dicho aviso deberá ser notificado, a través de medios físicos o electrónicos o digitales o de cualquier otra nueva tecnología que lo permita. '
                  ],
                 alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                {
                  text: 'En caso de que el SUSCRIPTOR no esté de acuerdo con el cambio de los términos y condiciones originalmente contratados, podrá optar por exigir el cumplimiento forzoso del contrato bajo las condiciones en que se firmó el mismo, o a solicitar la terminación  del presente contrato sin penalidad alguna para el SUSCRIPTOR dentro de los 30 (treinta) días naturales siguientes al aviso contemplado. ',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
                {
                  text: 'El PROVEEDOR deberá obtener el consentimiento del SUSCRIPTOR a través de medios físicos o electrónicos o digitales o de cualquier otra nueva tecnología que lo permita, para poder dar por terminado el presente contrato con la finalidad de sustituirlo por otro, o bien para la modificación de sus términos y condiciones. No se requerirá dicho consentimiento cuando la modificación genere un beneficio en favor del SUSCRIPTOR.    ',
                  alignment: 'justify',
                  margin: [5, 0, 0, 5]
                },
              ]
            },
        
            //columna derecha
           {
          width: '50%',
          stack: [
            {
              text: 'En caso de que el contrato sea celebrado a un plazo forzoso, el PROVEEDOR no puede modificar las condiciones ofrecidas y pactadas, salvo que medie autorización del Consumidor, por cualquier medio establecido en la Ley.',
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
        
            {
              text: 'El SUSCRIPTOR puede cambiar de tarifa, paquete o plan, aunque sea de menor monto con el que se contrató, en cualquier momento, pagando en su caso los cargos adicionales que se generen asociados a este cambio.',
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
        
            {
              text: [
                { text: 'NOVENA: SUSPENSIÓN DEL SERVICIO. ', bold: true },
                'El PROVEEDOR podrá suspender el Servicio, previa notificación por escrito al SUSCRIPTOR, a través de los medios físicos o electrónicos o digitales o de cualquier otra nueva tecnología que lo permita o del medio que él elija, si este último incurre en cualquiera de los siguientes supuestos:'
              ],
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
            
            // Numeración de supuestos
            {
              ol: [
                'Por pagos parciales de la tarifa aplicable al SERVICIO.',
                'Por falta de pago del SERVICIO después de 5 días naturales posteriores a la fecha de pago señalada en la carátula del presente contrato.',
                'Por utilizar el servicio de manera contraria a lo previsto en el contrato y/o a las disposiciones aplicables en materia de telecomunicaciones.',
                'Por alterar, modificar o mover el equipo terminal.',
                'Por declaración judicial o administrativa.'
              ],
             alignment: 'justify',
             margin: [5, 0, 5, 5]
            },
        
            {
              text: 'Una vez solucionada la causa que originó la suspensión del servicio, el PROVEEDOR deberá reanudar la prestación del servicio en un periodo máximo de 48 horas, debiendo pagar el SUSCRIPTOR los gastos por reconexión, lo cual no podrá ser superior al 20% del pago de una mensualidad.',
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
        
            {
              text: [
                { text: 'DÉCIMA: CONTINUIDAD DEL SERVICIO Y BONIFICACIONES POR INTERRUPCIÓN. ', bold: true },
                'El PROVEEDOR deberá bonificar y compensar al SUSCRIPTOR en los siguientes casos:'
              ],
              alignment: 'justify',
              margin: [5, 0, 5, 5]
            },
        
            // Puntos numerados
            {
              ol: [
                'Cuando por causas atribuibles al PROVEEDOR no se preste el servicio de telecomunicaciones en la forma y términos convenidos, contratados, ofrecidos o implícitos o información desplegada en la publicidad del proveedor, así como con los índices y parámetros de calidad contratados o establecidos por el la autoridad reguladora de telecomunicaciones, éste debe de compensar al SUSCRIPTOR la parte proporcional del precio del servicio, plan o paquete que se dejó de prestar y como bonificación al menos el 20% del monto del periodo de afectación de la prestación del servicio.\n ',
                
                'Cuando la interrupción del servicio sea por casos fortuitos o de fuerza mayor, si la misma dura más de 24 horas consecutivas siguientes al reporte que realice el SUSCRIPTOR, el PROVEEDOR hará la compensación por la parte proporcional del periodo en que se dejó de prestar el servicio contratado, la cual se verá reflejada en el siguiente recibo y/o factura. Además, el PROVEEDOR deberá bonificar por lo menos el 20% del monto del periodo de afectación.\n ',
                
                'Cuando se interrumpa el servicio por alguna causa previsible que repercuta de manera generalizada o significativa en la prestación del servicio, la misma no podrá afectar el servicio por'
              ],
             alignment: 'justify',
              margin: [5, 0, 5, 5] 
            }
          ]
        }
          ],
          columnGap: 20
        },

        
        // Sección 7
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                '',
                {
                  stack: [
                    { text: '' },
                    { text: 'ZONA INTERNET', bold: true },
                    { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                    { text: 'RFC: SEI220504HW4', bold: true },
                    { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                    { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                    { text: '' }
                  ],
                  alignment: 'right'
                }
              ]
            ]
          }
        },

    {
      columns: [
        // Columna izquierda
        {
          width: '50%',
          stack: [
            {
              text: 'más de 24 horas consecutivas; el PROVEEDOR dejará de cobrar al SUSCRIPTOR la parte proporcional del precio del servicio que se dejó de prestar, y deberá bonificar por lo menos el 20% del monto del periodo que se afectó.\n ',
              alignment: 'justify',
              margin: [5, 0, 10, 0]
            },
            {
              text: '4. Cuando el PROVEEDOR realice cargos indebidos, la devolución deberá efectuarse dentro de un plazo no mayor a los 5 días hábiles posteriores a la reclamación y deberá bonificar el 20% sobre el monto del cargo realizado indebidamente.\n ',
              alignment: 'justify',
              margin: [5, 0, 10, 0]
            },
            {
              text: 'A partir de que el PROVEEDOR reciba la llamada por parte del SUSCRIPTOR para reportar las fallas y/o interrupciones en el SERVICIO, el PROVEEDOR procederá a verificar el tipo de falla y con base en ello, se determinará el tiempo necesario para la reparación, el cual no puede exceder las 24 horas siguientes a la recepción del reporte.\n ',
              alignment: 'justify',
              margin: [5, 0, 10, 0]
            },
            {
              text: [
                { text: 'DÉCIMA PRIMERA: MECANISMOS DE BONIFICACIÓN Y COMPENSACIÓN. ', bold: true },
                'En caso de que proceda la bonificación y/o compensación, el PROVEEDOR se obliga a:\n '
              ],
              alignment: 'justify',
              margin: [5, 0, 10, 0]
            },
            {
              ol: [
                'Realizarlas a más tardar en la siguiente fecha de corte a partir de que se actualice alguno de los supuestos descritos en la cláusula anterior.\n ',
                'Reflejar en el siguiente estado de cuenta o factura, la bonificación y/o compensación realizada, y\n ',
                'Dicha bonificación y/o compensación se efectuará por los medios que pacten las partes.\n '
              ],
              alignment: 'justify',
              margin: [5, 0, 10, 0]
            },
            {
              text: [
                { text: 'DÉCIMA SEGUNDA: TERMINACIÓN Y CANCELACIÓN DEL CONTRATO.', bold: true },
                'El Presente contrato se podrá cancelar por cualquiera de las partes sin responsabilidad para ellas en los siguientes casos:\n '
              ],
              alignment: 'justify',
              margin: [5, 0, 10, 0]
            },
            {
              ol: [
                'Por la imposibilidad permanente del PROVEEDOR para continuar con la prestación del SERVICIO, ya sea por caso fortuito o fuerza mayor.\n ',
                'Si el SUSCRIPTOR no subsana en un término de 90 días naturales cualquiera de las causas que dieron origen a la suspensión del SERVICIO.\n ',
                'Si el SUSCRIPTOR conecta aparatos adicionales por su propia cuenta, subarrienda, cede o en cualquier forma traspasa los derechos establecidos en el contrato, sin la autorización previa y por escrito del PROVEEDOR.\n ',
                'Si el PROVEEDOR no presta el SERVICIO en la forma y términos convenidos, contratados, ofrecidos o implícitos en la información desplegada en la publicidad del proveedor, así como con los índices y parámetros de calidad contratados o establecidos por la autoridad reguladora de telecomunicaciones.\n ',
                'Si el SUSCRIPTOR proporciona al PROVEEDOR información falsa para la contratación del Servicio.\n ',
                'En caso de modificación unilateral de los términos, condiciones y tarifas establecidas en el presente contrato por parte del PROVEEDOR.\n ',
                'Por cualquier otra causa prevista en la legislación aplicable y vigente\n '
              ],
              type: 'lower-alpha',
              alignment: 'justify',
              margin: [5, 0, 10, 0]
            }
          ]
        },
        
        // Columna derecha
        {
          width: '50%',
          stack: [
            {
              text: 'En el supuesto de que el SUSCRIPTOR haya contratado los servicios con vigencia indefinida podrá dar por terminado el presente contrato en cualquier momento, sin responsabilidad ni penalidad alguna, únicamente dando el aviso correspondiente a través del mismo medio en el cual contrató el servicio o por los medios de contacto señalados en la carátula del presente contrato.',
              alignment: 'justify',
              margin: [8, 0, 10, 0]
            },
            {
              text: 'En el supuesto que el SUSCRIPTOR haya contratado los servicios a PLAZO FORZOSO cualquiera de LAS PARTES podrá dar por terminado anticipadamente el contrato, dejando a salvo el derecho de la parte afectada a reclamar daños y perjuicios que se hubieran causado por dicho motivo ante la autoridad jurisdiccional correspondiente',
              alignment: 'justify',
              margin: [5, 0, 10, 8]
            },
            {
              text: 'El PROVEEDOR realizará la devolución de las cantidades que en su caso el SUSCRIPTOR haya dado por adelantado y que correspondan a la parte proporcional del servicio que con motivo de la cancelación no se haya prestado efectivamente por parte del PROVEEDOR.',
              alignment: 'justify',
              margin: [5, 0, 10, 12]
            },
            {
              text: 'EL PROVEEDOR se obliga a comunicar al SUSCRIPTOR por escrito o por correo electrónico con al menos 30 (treinta) días escrito o por correo electrónico con al menos 30 (treinta) días hábiles de anticipación que la fecha del PLAZO FORZOSO está por concluir. Una vez concluido el PLAZO FORZOSO la vigencia del presente contrato será indefinida, por lo que el SUSCRIPTOR tendrá derecho a dar por terminado el contrato en cualquie momento, y sin penalización alguna, únicamente dando el aviso correspondiente a EL PROVEEDOR en los términos anteriormente descritos. La terminación del contrato no exime al SUSCRIPTOR de cubrir los adeudos pendientes de los servicios efectivamente prestados y de realizar la devolución de los EQUIPOS En caso de no devolverlos, el SUSCRIPTOR se obliga a pagar la tarifa del costo del equipo ',
              alignment: 'justify',
              margin: [5, 0, 10, 12]
            },
            {
              text: 'El PROVEEDOR realizará la devolución de las cantidades que en su caso el SUSCRIPTOR haya dado por adelantado y que correspondan a la parte proporcional del servicio que con motivo de la cancelación no se haya prestado efectivamente por parte del PROVEEDOR.  ',
              alignment: 'justify',
              margin: [5, 0, 10, 12]
            },
            {
              text: 'En caso de terminación del presente contrato, el PROVEEDOR  debe proporcionar un folio o número de registro al SUSCRIPTOR, mismo que puede ser entregado, a elección del SUSCRIPTOR, a través de medios físicos o electrónicos o digitales o de cualquier otra nueva tecnología que lo permita.   ',
              alignment: 'justify',
              margin: [5, 0, 10, 12]
            },
            {
              text: [
                { text: 'DÉCIMA TERCERA: USO DEL SERVICIO DE INTERNET FIJO EN CASA ', bold: true },
                'El Suscriptor se obliga a utilizar el Servicio de conformidad con lo dispuesto en el Contrato.'
              ],
              alignment: 'justify',
              margin: [5, 0, 5, 12]
            },
            {
              text: 'Una concentración inusual de usuarios puede causar que el uso de internet se incremente; por lo tanto, las condiciones de operación ideal se pueden ver desmejoradas, provocando una saturación momentánea que derive en lentitud del Servicio, en el entendido de que, si el Servicio no cumple con las características establecidas en el Contrato, el Suscriptor podrá solicitar la terminación del Contrato  ',
              alignment: 'justify',
              margin: [5, 0, 10, 12]
            },
            {
              text: 'La utilización del Servicio puede integrar imágenes, sonidos, textos  y/o contenidos que se pueden considerar ofensivos o no aptos para menores de edad, por lo que el acceso a estos corre por cuenta y  riesgo del Suscriptor.',
              alignment: 'justify',
              margin: [5, 0, 10, 12]
            },
          ]
        }
      ]
    },

        
        // Sección 8
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                '',
                {
                  stack: [
                    { text: '' },
                    { text: 'ZONA INTERNET', bold: true },
                    { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                    { text: 'RFC: SEI220504HW4', bold: true },
                    { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                    { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                    { text: '' }
                  ],
                  alignment: 'right'
                }
              ]
            ]
          }
        },
        
        {
          columns: [
            // Columna izquierda
            {
              width: '50%',
              stack: [
                {
                  width: '50%',
                  stack: [
                    {
                      text: [
                        'Toda aquella información que sea transmitida o recibida por el Usuario a través del Servicio de acceso a internet es responsabilidad exclusiva del Suscriptor, por lo que él libera expresamente al Proveedor de cualquier responsabilidad derivada de accesos no autorizados, robo, daño, destrucción o desviación de datos, modificación a las configuraciones y cualquier afectación a programas o equipos propiedad, en posesión o utilizados por el Suscriptor que se relacionen, utilicen o vinculen de manera directa o indirecta con el Servicio de acceso a internet prestado conforme al Contrato. ',
                        
                        'El Usuario es el único responsable de atender y resolver por sus medios cualquier reclamación.demanda, denuncia o querella que pueda derivarse de cualquiera de los hechos antes descritos.'
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 5, 5] 
                    }
                  ]
                },
               {
                 text: [
                    'Es responsabilidad del Suscriptor implementar las medidas requeridas para cuidar y salvaguardar su información, datos y/o software de su propiedad, de accesos desde Internet a sus dispositivos o, en su caso, evitar una contaminación por virus o  ',
                    'ataques de usuarios de internet, por lo que Proveedor no será responsable de cualquier daño y perjuicio causado al Suscriptor por los hechos antes mencionados.',
                      ],
                alignment: 'justify',
                margin: [5, 0, 5, 5] 
                },
                {
                  text: 'El Proveedor no es responsable de:',
                 alignment: 'justify',
                 margin: [5, 0, 5, 5] 
                },
                {
                  ol: [
                    'La configuración de los dispositivos que resulten necesarios para el uso concurrente del o de los equipos personales del Suscriptor.\n ',
                    'La compatibilidad, confiabilidad y funcionamiento del software de cada dispositivo del Suscriptor que permita el acceso a Internet.\n ',
                    'La confiabilidad de las transmisiones de datos, restricciones de acceso a una red o servidor específico a través de internet.\n ',
                    'Las interrupciones de acceso al Servicio de Internet fijo, fallas de los dispositivos del Usuario o del software del Suscriptor, o fallas en el equipo en comodato imputables al Suscriptor, la pérdida de datos o cualquier operación hecha por el Suscriptor por medio del Servicio.\n ',
                    'El funcionamiento, disponibilidad, accesibilidad o continuidad del Servicio de acceso a Internet fijo, en caso de que el Suscriptor no mantenga en su dispositivo el software que le suministre el Proveedor como complementos que podrán incrementar o complementar las funcionalidades del Servicio de acceso a internet fijo.\n ',
                    'De conformidad con el artículo 114 Octies de la Ley Federal del Derecho de Autor -en lo sucesivo, la “LFDA"-, elProveedor no será responsable por los daños y perjuicios ocasionados a los titulares de derechos de autor, derechosconexos y demás titulares de algún derecho de propiedadintelectual protegido por la LFDA, por las infracciones a derechos de autor o derechos conexos que ocurran en sus redes o sistemas en línea, siempre y cuando el Proveedor no controle, inicie o dirijala conducta infractora, aunque tenga lugar a través de sistemas o redes controladas u operadas por él o en su representación, conforme a lo siguiente:'
                  ],
                  alignment: 'justify',
                  margin: [5, 0, 5, 5] 
                },
                {
                  text: '6.1.   El Proveedor no será responsable de las infracciones, así como de los datos, información, materiales y contenidos que setransmitan o almacenen en sus sistemas o redes controladas u operadas por él o en su representación cuando:',
                  alignment: 'justify',
                  margin: [13, 0, 5, 5] 
                },
               ]
              },
                
                // Columna derecha
                {
                  width: '50%',
                  stack: [
                    {
              stack: [
            
                    {
                      text: [
                        { text: '6.1.1. ', bold: true },
                        'No inicie la cadena de transmisión de los materiales o contenidos ni seleccione los materiales o contenidos de la transmisión y los destinatarios; y,'
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                    },
                    {
                      text: [
                        { text: '6.1.2. ', bold: true },
                        'Incluya y no interfiera con medidas tecnológicas efectivas estándar, que protegen o identifican material protegido por la LFDA, que se desarrollan a través de un proceso abierto y voluntario por un amplio consenso de titulares de derecho de autor y proveedores de servicios, que están disponibles de manera razonable y no discriminatoria, y que no imponen costos sustanciales a los proveedores de servicios o cargas sustanciales en sus sistemas de redes.'
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                    }
                  ]
                },
                {
                    text: 'Algunas aplicaciones y/o servicios a través de Internet -juegos en línea, servicio de Streaming de audio, video y/o audio y video, entre otros- requieren de un ancho de banda mínimo para su correcto funcionamiento y desempeño, por lo cual el Suscriptor es el único responsable de validar las necesidades técnicas de navegación que requiere antes de contratar el Servicio.',
                    alignment: 'justify',
                    margin: [5, 0, 10, 12]
                },
                {
                    text: 'El Proveedor cumplirá con la neutralidad de las redes que se encuentra establecida en Ley Federal de Telecomunicaciones y Radiodifusión y en los Lineamientos para la gestión de tráfico y administración de red a que deberán sujetarse los concesionarios y autorizados que presten el servicio de acceso a Internet emitidos por la autoridad reguladora de telecomunicaciones.',
                    alignment: 'justify',
                    margin: [5, 0, 10, 12]
                },
                {
                    text: 'La utilización del SERVICIO puede integrar imágenes, sonidos, textos y/o contenidos que se pueden considerar ofensivos o no aptos para menores de edad, por lo que el acceso a los mismos corre por cuenta y riesgo del SUSCRIPTOR.',
                    alignment: 'justify',
                    margin: [5, 0, 10, 12]
                },
                {
                    text: 'El SERVICIO está sujeto a una cuota mensual de navegación de descarga que se determinará en el Paquete contratado por el SUSCRIPTOR, por lo que el PROVEEDOR proporcionará la información del consumo total de datos en el periodo de facturación correspondiente.',
                    alignment: 'justify',
                    margin: [5, 0, 10, 12]
                },
                {
                      text: [
                        { text: 'DÉCIMA CUARTA: CESIÓN. ', bold: true },
                        'Previa autorización de PROVEEDOR, el SUSCRIPTOR podrá ceder los derechos y obligaciones derivados de este contrato a cualquier persona en el mismo domicilio y/o diferente domicilio, siempre y cuando se encuentre al corriente de sus pagos. En caso de que fuera en otro domicilio se podrá realizar la cesión siempre y cuando EL PROVEEDOR cuente con cobertura. '
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                },
                {
                      text: [
                        { text: 'DÉCIMA QUINTA: SERVICIO DE TELEVISIÓN RESTRINGIDA.', bold: true },
                        'El PROVEEDOR deberá tener disponible para el SUSCRIPTOR que lo solicite, el servicio de control parental (servicio útil para padres y responsables educativos que desean impedir que niños o adolescentes puedan acceder a determinados contenidos) de manera gratuita y publicar de forma clara las características operativas de este servicio y las instrucciones para que el SUSCRIPTOR pueda operar las aplicaciones necesarias para el  correcto funcionamiento del mencionado servicio. '
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                },
                {
                      text: [
                        { text: 'DÉCIMA SEXTA: ACCESIBILIDAD PARA PERSONAS CONDISCAPACIDAD.', bold: true },
                        'En cuanto a la contratación para usuarios con discapacidad, el PROVEEDOR estará obligado a poner a disposición del SUSCRIPTOR la utilización de otros medios de comunicación para dar a conocer las condiciones establecidas en el presente contrato, así como los servicios adicionales y los paquetes que ofrezca el PROVEEDOR. '
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                },
              ]
            }
          ]
        },
        
        // Sección 9
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                '',
                {
                  stack: [
                    { text: '' },
                    { text: 'ZONA INTERNET', bold: true },
                    { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                    { text: 'RFC: SEI220504HW4', bold: true },
                    { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                    { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                    { text: '' }
                  ],
                  alignment: 'right'
                }
              ]
            ]
          }
        },
       
        {
          columns: [
            // Columna izquierda
            {
              width: '50%',
              stack: [
                {
                  width: '50%',
                  stack: [
                    {
                      text: [
                        { text: 'DÉCIMA SÉPTIMA: NO DISCRIMINACIÓN. ', bold: true },
                        'El PROVEEDOR debe prestar el SERVICIO en condiciones equitativas a todo aquel que lo solicite, sin establecer privilegios o distinciones en forma discriminatoria, respecto de otros SUSCRIPTORES en la misma área de cobertura y en las mismas condiciones de contratación. '
                      ],
                      alignment: 'justify',
                      margin: [13, 0, 5, 5]
                    }
                  ]
                },
                {
                    text: 'En caso de que el PROVEEDOR ofrezca condiciones más favorables a uno o más suscriptores situados en supuestos equivalentes o similares, el SUSCRIPTOR puede exigir las mismas condiciones, siempre y cuando sea posible técnicamente para la prestación del Servicio.',
                    alignment: 'justify',
                    margin: [13, 0, 5, 5]
                },
                {
                      text: [
                        { text: 'DÉCIMA OCTAVA: PROTECCIÓN DE DATOS PERSONALES.', bold: true },
                        'El PROVEEDOR está obligado a proteger y tratar conforme a la normatividad aplicable, los datos personales que le sean proporcionados por el SUSCRIPTOR.'
                      ],
                      alignment: 'justify',
                      margin: [13, 0, 5, 5]
                },
                {
                    text: 'El PROVEEDOR debe poner a disposición del SUSCRIPTOR el aviso de privacidad para que pueda ejercer alguno de sus derechos, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
                    alignment: 'justify',
                    margin: [13, 0, 5, 5]
                },
                {
                    text: 'El PROVEEDOR se obliga a no divulgar los términos, condiciones y datos personales de este Contrato sin el previo consentimiento del SUSCRIPTOR, salvo en los casos en los que alguna autoridad  competente y con facultades para requerir cualquier tipo de información relativa al presente, le requiera al PROVEEDOR la entrega de dicha información.',
                   alignment: 'justify',
                   margin: [13, 0, 5, 5]
                },
                {
                    text: 'El SUSCRIPTOR autoriza expresamente al PROVEEDOR, a  través de la solicitud de reportes de crédito a sociedades de información crediticia, para que éste solicite y remita cualquier  información crediticia o relativa al comportamiento comercial del SUSCRIPTOR, así como a realizar consultas periódicas al historial crediticio del mismo durante el tiempo en que éste mantengarelación jurídica con el PROVEEDOR, de conformidad con lo establecido por la Ley para Regular las Sociedades de Información Crediticia. Asimismo, en los términos de la citada Ley, el SUSCRIPTOR autoriza al PROVEEDOR para que transfiera a sociedades de información crediticia su información personal financiera derivada de la relación jurídica con el PROVEEDOR.',
                    alignment: 'justify',
                    margin: [13, 0, 5, 5]
                },
                {
                    text: 'Para utilizar la información del SUSCRIPTOR con fines mercadotécnicos o publicitarios; así como para enviarle publicidad sobre bienes, productos o servicios, el PROVEEDOR debe obtener previamente el consentimiento expreso del SUSCRIPTOR a través de la carátula del presente contrato.',
                    alignment: 'justify',
                    margin: [13, 0, 5, 5]
                },
                {
                      text: [
                        { text: 'DÉCIMA NOVENA: CARTA DE DERECHOS MÍNIMOS.', bold: true },
                        'PROVEEDOR dará a conocer al SUSCRIPTOR la carta de derechos mínimos de los usuarios de los servicios públicos de telecomunicaciones al momento de realizar el procedimiento de  contratación del plan respectivo y la mantendrá de manera permanente en su página de Internet.'
                      ],
                      alignment: 'justify',
                      margin: [13, 0, 5, 5]
                },
                {
                    text: 'El PROVEEDOR deberá respetar en todo momento los derechos establecidos en el Acuerdo mediante el cual la Procuraduría Federal del Consumidor, Agencia de Transformación Digital y Telecomunicaciones y Comisión Reguladora de Telecomunicaciones, determinan los derechos mínimos que deben incluirse en la carta a que hace referencia el artículo 185 de la Ley en Materia de Telecomunicaciones y Radiodifusión.',
                    alignment: 'justify',
                    margin: [13, 0, 5, 5]
                },
               
               ]
              },
                
                // Columna derecha
                {
                  width: '50%',
                  stack: [
                    {
              stack: [
                    {
                      text: [
                        { text: 'VIGÉSIMA: CONSULTAS, DUDAS, ACLARACIONES Y QUEJAS. ', bold: true },
                        'EL SUSCRIPTOR podrá presentar sus quejas por fallas y/o deficiencias en el servicio y/o equipos; así como consultas, contrataciones, cancelaciones, sugerencias y reclamaciones al PROVEEDOR de manera gratuita por los medios señalados en la carátula del presente contrato.'
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                    }
                  ]
                },
                {
                      text: [
                        { text: 'VIGÉSIMA PRIMERA: AUTORIDAD COMPETENTE.', bold: true },
                        'La PROFECO es la autoridad competente en materia administrativa para resolver cualquier controversia que se suscite sobre la interpretación o cumplimiento del presente contrato de adhesión. '
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                },
                 {
                    text: 'A la autoridad reguladora de telecomunicaciones le corresponde  regular y vigilar la calidad de los Servicios de Telecomunicaciones, emita y que sean referidas la Norma Oficial Mexicana NOM-184-SCFI-2018.',
                     alignment: 'justify',
                     margin: [5, 0, 10, 12]
                },
                 {
                      text: [
                        { text: 'VIGÉSIMA SEGUNDA: PROCEDIMIENTO CONCILIATORIO', bold: true },
                        'Cuando se llegare a iniciar algún procedimiento conciliatorio ante la PROFECO, el PROVEEDOR no podrá interrumpir los servicios. Si el PROVEEDOR suspende los servicios una vez recibida la  reclamación del SUSCRIPTOR y/o dentro de cualquier momento  del procedimiento conciliatorio, la PROFECO requerirá al PROVEEDOR el restablecimiento del servicio.  '
                      ],
                     alignment: 'justify',
                     margin: [5, 0, 10, 12]
                },
                {
                    text: 'En todo caso, el SUSCRIPTOR no está exento de sus obligaciones  de pago de los bienes y/o servicios contratados y utilizados, salvo  cuando se haya determinado su improcedencia.',
                    alignment: 'justify',
                    margin: [5, 0, 10, 12]
                },
                {
                    text: [
                        { text: 'VIGÉSIMA TERCERA: FIRMA ELECTRÓNICA.', bold: true },
                        'El presente contrato podrá ser suscrito por las partes a través de medios físicos  o electrónicos, a través de cualquier tecnología fiable que el  PROVEEDOR ponga a disposición del SUSCRIPTOR, por lo que esta forma de suscripción será completamente válida de acuerdo  con la ley aplicable.'
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                },
                {
                    text: 'Cualquiera que sea el medio por el cual se firma el presente  contrato el PROVEEDOR deberá enviarlo al SUSCRIPTOR por los medios electrónicos que para tal efecto haya proporcionado en lacarátula del presente contrato.',
                    alignment: 'justify',
                    margin: [5, 0, 10, 12]
                },
                 {
                      text: [
                        { text: 'VIGÉSIMA CUARTA: DATOS REGISTRALES. ', bold: true },
                        'Contrato de Adhesión se encuentra registrado en la Procuraduría Federal del Consumidor, con el número 229-2026 de fecha 22 del mes de abril de 2026. '
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                },
                {
                      text: [
                        'Asimismo, el SUSCRIPTOR podrá consultar dicho registro en la liga de acceso a Internet\n',
                        {
                          text: 'https://burocomercial.profeco.gob.mx/ca_spt/ExtravisiónComunicación.S.A.P.IdeC.V.!!Telesur229-2026.pdf',
                          color: 'blue',
                          decoration: 'underline'
                        },
                        ' y en el siguiente código:'
                      ],
                      alignment: 'justify',
                      margin: [5, 0, 10, 12]
                },
                {
                      text: 'SCAN\nME',
                      alignment: 'center',
                      bold: true,
                      fontSize: 14,
                      margin: [5, 0, 10, 12]
                },
                {
                    text: 'Cualquier diferencia entre el texto del contrato de adhesión registrado ante la Procuraduría Federal del Consumidor y el utilizado en perjuicio del SUSCRIPTOR, se tendrá por no puesta.',
                    alignment: 'justify',
                    margin: [5, 0, 10, 12]
                },
                {
                    text: 'Los contratos de adhesión registrados ante la PROFECO deberán utilizarse en todas sus operaciones comerciales y corresponder fielmente con los modelos de contrato registrados por la misma,',
                    alignment: 'justify',
                    margin: [5, 0, 10, 12]
                }
              ]
            }
          ]
        },

        // Sección 10
        {
          style: 'tableExample',
          table: {
            widths: ['30%', '70%'],
            body: [
              [
                '',
                {
                  stack: [
                    { text: '' },
                    { text: 'ZONA INTERNET', bold: true },
                    { text: 'SERVICIOS, ENLACES E INTERNET DE OCCIDENTE, S. DE R.L. DE C.V.', bold: true },
                    { text: 'RFC: SEI220504HW4', bold: true },
                    { text: 'FRANCISCO I. MADERO 28, TECALITLÁN CENTRO', bold: true },
                    { text: 'TECALITLÁN, JALISCO, C.P. 49900', bold: true },
                    { text: '' }
                  ],
                  alignment: 'right'
                }
              ]
            ]
          }
        },
        
        {
          columns: [
            // Columna izquierda
            {
              width: '50%',
              stack: [
                {
                  width: '50%',
                  stack: [
                    {
                    text: 'estar publicados de manera permanente en la página en Internet del PROVEEDOR y disponibles para su consulta a través de que lo permita, sin perjuicio de lo establecido en los Lineamientos Generales de Accesibilidad a Servicios de Telecomunicaciones',
                    alignment: 'justify',
                    margin: [13, 0, 5, 5]
                },
              ]
            }
          ]
        },
                
                // Columna derecha
                {
                  width: '50%',
                  stack: [
                 {
                    text: 'para los Usuarios con Discapacidad que emita la autoridad reguladora de telecomunicaciones.',
                     alignment: 'justify',
                     margin: [5, 0, 10, 12]
                }
              ]
            }
          ]
        },
        
        
        
        
  ],
  

  styles: {
    tableExample: {
      margin: [0, 0, 0, 5]
    }
  },

  defaultStyle: {
    fontSize: 9
  },

  footer: function(currentPage, pageCount) {
    return {
      margin: [40, 0, 40, 10],
      columns: [
        {
          text: 'Página ' + currentPage + ' de ' + pageCount,
          alignment: 'right',
          fontSize: 9
        }
      ]
    };
  }
};