var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { categories: categoriesMockData })
});
router.get('/entreprise/:id', function (req, res) {
  res.render('entreprise2', { companies: companiesMockData })
});

router.get('/hello', function (req, res) {
  res.send('hello from the other side')
})

module.exports = router;


const categoriesMockData = [
  {
    name: 'Medicale',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    picture: 'https://www.keejob.com/media/recruiter/recruiter_12899/logo-12899-20170421-165921.png',
    id: 1,
  },
  {
    name: 'Medicale',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    picture: 'https://www.keejob.com/media/recruiter/recruiter_12899/logo-12899-20170421-165921.png',
    id: 2,
  },
  {
    name: 'Medicale',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    picture: 'https://www.keejob.com/media/recruiter/recruiter_12899/logo-12899-20170421-165921.png',
    id: 3,
  },
  {
    name: 'Medicale',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    picture: 'https://www.keejob.com/media/recruiter/recruiter_12899/logo-12899-20170421-165921.png',
    id: 4,
  },
  {
    name: 'Medicale',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    picture: 'https://www.keejob.com/media/recruiter/recruiter_12899/logo-12899-20170421-165921.png',
    id: 5,
  },
  {
    name: 'Medicale',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    picture: 'https://www.keejob.com/media/recruiter/recruiter_12899/logo-12899-20170421-165921.png',
    id: 6,
  },
  {
    name: 'Medicale',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    picture: 'https://www.keejob.com/media/recruiter/recruiter_12899/logo-12899-20170421-165921.png',
    id: 7,
  },
]

const companiesMockData = [
  {
    name: 'Clinique carthage',
    description: 'Description de la clinique ou des differentes specialités.',
    picture: 'https://static.lpnt.fr/images/2018/06/13/15270103lpw-15282244-article-urgences-hopital-de-gonesse-jpg_5321833_660x281.jpg',
    id: 1
  },
  {
    name: 'Clinique carthage',
    description: 'Description de la clinique ou des differentes specialités.',
    picture: 'https://static.lpnt.fr/images/2018/06/13/15270103lpw-15282244-article-urgences-hopital-de-gonesse-jpg_5321833_660x281.jpg',
    id: 2
  },
  {
    name: 'Clinique carthage',
    description: 'Description de la clinique ou des differentes specialités.',
    picture: 'https://static.lpnt.fr/images/2018/06/13/15270103lpw-15282244-article-urgences-hopital-de-gonesse-jpg_5321833_660x281.jpg',
    id: 3
  },
  {
    name: 'Clinique carthage',
    description: 'Description de la clinique ou des differentes specialités.',
    picture: 'https://static.lpnt.fr/images/2018/06/13/15270103lpw-15282244-article-urgences-hopital-de-gonesse-jpg_5321833_660x281.jpg',
    id: 4
  },
  {
    name: 'Clinique carthage',
    description: 'Description de la clinique ou des differentes specialités.',
    picture: 'https://static.lpnt.fr/images/2018/06/13/15270103lpw-15282244-article-urgences-hopital-de-gonesse-jpg_5321833_660x281.jpg',
    id: 5
  },
]