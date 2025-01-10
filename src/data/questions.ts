import corollaFront from './corolla/front.png';
import corollaSide from './corolla/side.png';
import corollaBack from './corolla/back.png';
import corollaInside from './corolla/inside.png';
import civicFront from './civic/front.png';
import civicSide from './civic/side.png';
import civicBack from './civic/back.png';
import civicInside from './civic/inside.png';
import bmwFront from './bmw/front.png';
import bmwSide from './bmw/side.png';
import bmwBack from './bmw/back.png';
import bmwInside from './bmw/inside.png';
import passatFront from './passat/front.png';
import passatSide from './passat/side.png';
import passatBack from './passat/back.png';
import passatInside from './passat/inside.png';
import miniFront from './mini/front.png';
import miniSide from './mini/side.png';
import miniBack from './mini/back.png';
import miniInside from './mini/inside.png';
import clioFront from './clio/front.png';
import clioSide from './clio/side.png';
import clioBack from './clio/back.png';
import clioInside from './clio/inside.png';

export interface CarImage {
    url: string;
    alt: string;
  }
  
  export interface CarQuestion {
    id: number;
    images: CarImage[];
    car: {
      name: string;
      year: string;
      package: string;
      engine: string;
      nickname?: string;
    };
    questions: {
      type: 'brand' | 'model' | 'year' | 'package' | 'engine' | 'special';
      question: string;
      options: string[];
      correctAnswer: string;
      points: number;
    }[];
  }
  
  export const questions: CarQuestion[] = [
    {                    // COROLLA
      id: 1,
      images: [
        {
          url: corollaFront,
          alt: "Toyota Corolla 2004 Front"
        },
        {
          url: corollaSide,
          alt: "Toyota Corolla 2004 Side"
        },
        {
          url: corollaBack,
          alt: "Toyota Corolla 2004 Back"
        },
        {
          url: corollaInside,
          alt: "Toyota Corolla 2004 Inside"
        }
      ],
      car: {
        name: "Toyota Corolla",
        year: "2004",
        package: "Sol",
        engine: "1.6",
        nickname: "Balina Kasa"
      },
      questions: [
        {
          type: "brand",
          question: "Bu aracın markası nedir?",
          options: ["Toyota", "Volkswagen", "Audi", "Fiat"],
          correctAnswer: "Toyota",
          points: 1
        },
        {
          type: "model",
          question: "Bu Toyota'nın modeli nedir?",
          options: ["Avensis", "Corolla", "Hilux", "Yaris"],
          correctAnswer: "Corolla",
          points: 3
        },
        {
          type: "year",
          question: "Bu araç hangi yıllar arasında üretilmiştir?",
          options: ["1994-1998", "1998-2002", "2002-2007", "2007-2014"],
          correctAnswer: "2002-2007",
          points: 5
        },
        {
          type: "package",
          question: "Bu araç hangi pakettir?",
          options: ["Terra", "Sol", "Verso", "VVi-Sport"],
          correctAnswer: "Sol",
          points: 7
        },
        {
          type: "engine",
          question: "Aracın motor hacmi nedir?",
          options: ["1.4", "1.6", "1.8", "2.0"],
          correctAnswer: "1.6",
          points: 9
        },
        {
          type: "special",
          question: "Bu kasanın halk arasında bilinen adı nedir?",
          options: ["Efsane Kasa", "Balina Kasa", "Kedi Göz", "Uzay Kasa"],
          correctAnswer: "Balina Kasa",
          points: 11
        }
      ]
    },
    {                  // TYPE-R
      id: 2,
      images: [
        {
          url: civicFront,
          alt: "Honda Civic Type R Front"
        },
        {
          url: civicSide,
          alt: "Honda Civic Type R Side"
        },
        {
          url: civicBack,
          alt: "Honda Civic Type R Back"
        },
        {
          url: civicInside,
          alt: "Honda Civic Type R Inside"
        }
      ],
      car: {
        name: "Honda Civic",
        year: "2015",
        package: "Type R",
        engine: "2.0",
        nickname: "FD2"
      },
      questions: [
        {
          type: "brand",
          question: "Bu aracın markası nedir?",
          options: ["Toyota", "Honda", "Subaru", "Mitsubishi"],
          correctAnswer: "Honda",
          points: 1
        },
        {
          type: "model",
          question: "Bu aracın modeli nedir?",
          options: ["Accord", "Jazz", "Civic", "CR-V"],
          correctAnswer: "Civic",
          points: 3
        },
        {
          type: "year",
          question: "Bu araç hangi yıllar arasında üretilmiştir?",
          options: ["2001-2006", "2006-2012", "2012-2016", "2017-2022"],
          correctAnswer: "2017-2022",
          points: 5
        },
        {
          type: "package",
          question: "Bu araç hangi pakettir?",
          options: ["Sport", "Type S", "Type R", "Mugen"],
          correctAnswer: "Type R",
          points: 7
        },
        {
          type: "engine",
          question: "Bu aracın hacmi nedir?",
          options: ["1.6", "1.8", "2.0", "2.2"],
          correctAnswer: "2.0",
          points: 9
        },
        {
          type: "special",
          question: "Bu aracın şasi kodu nedir?",
          options: ["EP3", "FN2", "FD2", "FK8"],
          correctAnswer: "FD2",
          points: 11
        }
      ]
    },
    {                // 3.18i
      id: 3,
      images: [
        {
          url: bmwFront,
          alt: "BMW 318i Standart Front"
        },
        {
          url: bmwSide,
          alt: "BMW 318i Standart Side"
        },
        {
          url: bmwBack,
          alt: "BMW 318i Standart Back"
        },
        {
          url: bmwInside,
          alt: "BMW 318i Standart Inside"
        }
      ],
      car: {
        name: "BMW 3",
        year: "2001",
        package: "3.18i",
        engine: "1.9",
        nickname: "E46"
      },
      questions: [
        {
          type: "brand",
          question: "Bu aracın markası nedir?",
          options: ["BWM", "Volkswagen", "Audi", "Lada"],
          correctAnswer: "BMW",
          points: 1
        },
        {
          type: "model",
          question: "Bu aracın modeli nedir?",
          options: ["2", "3", "4", "5"],
          correctAnswer: "3",
          points: 3
        },
        {
          type: "year",
          question: "Bu araç hangi yıllar arasında üretilmiştir?",
          options: ["1983-1991", "1991-1999", "2000-2005", "2005-2012"],
          correctAnswer: "2000-2005",
          points: 5
        },
        {
          type: "package",
          question: "Bu araç hangi pakettir?",
          options: ["Joy", "Standart", "M", "M Sport"],
          correctAnswer: "Standart",
          points: 7
        },
        {
          type: "engine",
          question: "Aracın motor hacmi nedir?",
          options: ["1.8", "1.9", "2.0", "2.5"],
          correctAnswer: "1.9",
          points: 9
        },
        {
          type: "special",
          question: "Bu aarcın şasi kodu ve beygiri nedir?",
          options: ["E36-210", "E36-142", "E46-193", "E46-118"],
          correctAnswer: "E46-118",
          points: 11
        }
      ]
    },
    {                // PASSAT
      id: 4,
      images: [
        {
          url: passatFront,
          alt: "Volkswagen Passat Front"
        },
        {
          url: passatSide,
          alt: "Volkswagen Passat Side"
        },
        {
          url: passatBack,
          alt: "Volkswagen Passat  Back"
        },
        {
          url: passatInside,
          alt: "Volkswagen Passat  Inside"
        }
      ],
      car: {
        name: "Volkswagen Passat",
        year: "2020",
        package: "Highline",
        engine: "1.5",
        nickname: "aşiret"
      },
      questions: [
        {
          type: "brand",
          question: "Bu aracın markası nedir?",
          options: ["BWM", "Volkswagen", "Audi", "Lada"],
          correctAnswer: "Volkswagen",
          points: 1
        },
        {
          type: "model",
          question: "Bu aracın modeli nedir?",
          options: ["Jetta", "Bora", "Golf", "Passat"],
          correctAnswer: "Passat",
          points: 3
        },
        {
          type: "year",
          question: "Bu araç hangi yıllar arasında üretilmiştir?",
          options: ["1996-2003", "2003-2011", "2011-2014", "2014-2022"],
          correctAnswer: "2014-2022",
          points: 5
        },
        {
          type: "package",
          question: "Bu araç hangi pakettir?",
          options: ["Trendline", "Comfortline", "Highline", "R Line"],
          correctAnswer: "Highline",
          points: 7
        },
        {
          type: "engine",
          question: "Aracın motor hacmi nedir?",
          options: ["1.4", "1.5", "1.6", "2.0"],
          correctAnswer: "1.5",
          points: 9
        },
        {
          type: "special",
          question: "Bu aarcın şanzımanı hangisidir?",
          options: ["CVT", "DSG", "MMT", "Manuel"],
          correctAnswer: "DSG",
          points: 11
        }
      ]
    },
    {                // JOHN COOPER
      id: 5,
      images: [
        {
          url: miniFront,
          alt: "Mini John Cooper Front"
        },
        {
          url: miniSide,
          alt: "Mini John Cooper Side"
        },
        {
          url: miniBack,
          alt: "Mini John Cooper Back"
        },
        {
          url: miniInside,
          alt: "Mini John Cooper Inside"
        }
      ],
      car: {
        name: "Mini Cooper",
        year: "2012",
        package: "John Cooper",
        engine: "1.6",
        nickname: "unknown"
      },
      questions: [
        {
          type: "brand",
          question: "Bu aracın markası nedir?",
          options: ["Mini", "Jeep", "Bentley", "Aston Martin"],
          correctAnswer: "Mini",
          points: 1
        },
        {
          type: "model",
          question: "Bu Honda'nın modeli nedir?",
          options: ["Countryman", "One", "Cooper", "John Cooper"],
          correctAnswer: "John Cooper",
          points: 3
        },
        {
          type: "year",
          question: "Bu araç hangi yıllar arasında üretilmiştir?",
          options: ["2000-2006", "2006-2014", "2014-2018", "2018-2022"],
          correctAnswer: "2006-2014",
          points: 5
        },
        {
          type: "package",
          question: "Bu araç hangi pakettir?",
          options: ["Premium", "Works Clubman", "Works", "Sport"],
          correctAnswer: "Works",
          points: 7
        },
        {
          type: "engine",
          question: "Aracın motor hacmi nedir?",
          options: ["1.5", "1.6", "1.8", "2.0"],
          correctAnswer: "1.6",
          points: 9
        },
        {
          type: "special",
          question: "Mini şu anda hangşi firmanın çatısı altındadır",
          options: ["GM", "BMW", "Volkswagen", "Nissan"],
          correctAnswer: "BMW",
          points: 11
        }
      ]
    },
    {                // CLIO
      id: 6,
      images: [
        {
          url: clioFront,
          alt: "Renault Clio Front"
        },
        {
          url: clioSide,
          alt: "Renault Clio Side"
        },
        {
          url: clioBack,
          alt: "Renault Clio Back"
        },
        {
          url: clioInside,
          alt: "Renault Clio Inside"
        }
      ],
      car: {
        name: "Renault Clio",
        year: "2003",
        package: "Expression",
        engine: "1.5",
        nickname: "unknown"
      },
      questions: [
        {
          type: "brand",
          question: "Bu aracın markası nedir?",
          options: ["Fiat", "Volkswagen", "Tofaş", "Renault"],
          correctAnswer: "Renault",
          points: 1
        },
        {
          type: "model",
          question: "Bu Honda'nın modeli nedir?",
          options: ["Taliant", "Clio/Symbol", "Megane", "Twingo"],
          correctAnswer: "Clio/Symbol",
          points: 3
        },
        {
          type: "year",
          question: "Bu araç hangi yıllar arasında üretilmiştir?",
          options: ["1990-1994", "1994-1998", "1998-2002", "2003-2005"],
          correctAnswer: "2003-2005",
          points: 5
        },
        {
          type: "package",
          question: "Bu araç hangi pakettir?",
          options: ["Dynamic", "RTE", "Expression", "Icon"],
          correctAnswer: "Expression",
          points: 7
        },
        {
          type: "engine",
          question: "Aracın motor hacmi nedir?",
          options: ["1.3", "1.4", "1.5", "1.6"],
          correctAnswer: "1.5",
          points: 9
        },
        {
          type: "special",
          question: "Clio ilk üretildiğinde hangi modelin yerine geçmiştir?",
          options: ["R3", "R5", "R9", "Symbol"],
          correctAnswer: "R5",
          points: 11
        }
      ]
    }
  ];