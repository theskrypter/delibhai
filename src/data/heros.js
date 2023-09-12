import bablo from '../assets/bablo.png';
import elham from '../assets/elham.png';
import pathan from '../assets/pathan.jpg';

const heros = [
  {
    id: 'DH001',
    name: 'বাবলু খান',
    image: bablo,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'AB+',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'কার',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH002',
    name: 'সাইফ এলহাম',
    image: elham,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'A+',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'অটো রিক্সা',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH003',
    name: 'আল-আমিন পাঠান',
    image: pathan,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'A-',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'কার',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH004',
    name: 'বাবলু খান',
    image: bablo,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'AB+',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'কার',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH005',
    name: 'সাইফ এলহাম এলহাম',
    image: elham,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'এ+',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'বাইক',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH006',
    name: 'আল-আমিন পাঠান',
    image: pathan,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'A-',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'কার',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH007',
    name: 'বাবলু খান',
    image: bablo,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'AB+',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'কার',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH008',
    name: 'সাইফ এলহাম',
    image: elham,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'A+',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'অটো রিক্সা',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH009',
    name: 'আল-আমিন পাঠান',
    image: pathan,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'A-',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'কার',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH010',
    name: 'বাবলু খান',
    image: bablo,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'AB+',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'কার',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH011',
    name: 'সাইফ এলহাম এলহাম',
    image: elham,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'এ+',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'বাইক',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
  {
    id: 'DH012',
    name: 'আল-আমিন পাঠান',
    image: pathan,
    father: 'মোঃ ইউসুফ আলী',
    sex: 'পুরুষ',
    bloodGroup: 'A-',
    age: '29',
    nid: '1023274465',
    mobile1: '01886232352',
    mobile2: '01886232353',
    email: 'bkctg540@gmail.com',
    facebook: 'www.fb.com/bablo540',
    presentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    permanentAddress: {
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      street: 'হোল্ডিং: ০৭২, গ্রাম: পূর্ব পাড়া',
    },
    vehicleType: 'কার',
    vehicleBrand: 'BMW',
    vehicleModel: 'BMW2023 v.3',
    vehicleNumber: 'চট্টমেট্রো-হ, 32-1823',
    vehicleName: 'ডেলিভাই পরিবহন',
    ownerName: 'সাইফ এলহাম',
    ownerAddress:
      'বাসা/হোল্ডিং: ০৭২, গ্রাম/রাস্তা:  পূর্বপাড়া,  হেয়াকো - 4327, ফটিকছড়ি, চট্টগ্রাম।',
    ownerMobile: '+88 01823540325',
    ownerEmail: 'ptechbk@gmail.com',
    serviceUsage: 'ভাড়ায় চালিত',
    serviceType: 'লোকাল ভাড়া',
    mainStation: 'হেয়াকো বাজার',
    serviceArea:{
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      post: 'হেয়াকো',
      zip: '4327',
      areas: [
        'হেয়াকো',
        'সওদাগর পাড়া',
        'অলিপুর',
        'মুসলিমপুর',
        'মুসলিমপাড়া',
        'বেকের বাজার',
        'পূর্ব পাড়া',
      ],
    },
    serviceTime: [
      {
        start: '06:00',
        end: '14:00',
      },
      {
        start: '17:00',
        end: '23:00',
      },
    ],

    location: {
      division: 'চট্টগ্রাম',
      district: 'চট্টগ্রাম',
      subDistrict: 'ফটিকছড়ি',
      thana: 'ভুজপুর',
      union: 'দাঁতমারা',
      PO: 'হেয়াকো',
      zip: '4327',
      village: 'অলিপুর',
      station: 'হেয়াকো বাজার',
    },

    available: true,
    distance: 1.02,
    vehiclePhotos: [
      'https://i.ibb.co/6Z1tp9j/fbb02907e25b00efa162805844486f59.jpg',
      'https://i.ibb.co/QYSP65x/97f8374c30112b73b458afd99327bd0e.jpg',
      'https://i.ibb.co/T4HVfR8/46ed566c7d77fbeb3f145cfc731e4892.png',
      'https://i.ibb.co/mt1ktQn/adcd0399448005416800b42963624119.jpg',
    ],
    reviews: [
      {
        id: 'DH001',
        userImage: bablo,
        userName: 'বাবলু খান',
        rating: 5,
        date: '২৮/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH002',
        userImage: elham,
        userName: 'সাইফ এলহাম',
        rating: 4,
        date: '২১/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
      {
        id: 'DH003',
        userImage: pathan,
        userName: 'আল-আমিন পাঠান',
        rating: 3,
        date: '১৫/৭/২৩',
        review:
          'ডেলিভাই এমন একটি বাইক রাইড শেয়ারিং অ্যাপ যার মাধ্যমে আপনি সহজেই ট্র্যাফিক জ্যাম এড়িয়েযেতে পারেন একটি বাইক রাইড রিকোয়েস্ট করে। শুধু তাই নয়, আপনার রাইডটি হবে দ্রুত এবংসাশ্রয়ী!',
      },
    ],
  },
];

export default heros;
