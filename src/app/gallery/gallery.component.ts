import { Component } from '@angular/core';

interface PhotoDetails {
  images: string[];
  images_location: string[]; 
  images_shot_using: string[]; 
  images_date: string[];
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  section_images : Record<string, PhotoDetails> = {
    col1_abstract: {
     'images': [
        "https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        "https://images.unsplash.com/photo-1587845323226-bad89242c735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1487&q=80",
        "https://images.unsplash.com/photo-1644174735216-dcc1542d65b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1607707972895-7f994d8c2f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
      ],
      'images_shot_using': [
        'Nikon', 
        'Canon EOS', 
        'Canon EOS', 
        'Nikon 500'
      ],
      'images_location': [
        'Paris', 
        'USA', 
        'London', 
        'Paris'
      ],
      'images_date': [
        'March 15th, 2021', 
        'February 28th, 2020', 
        'December 27th, 2019',
        'May 13th, 2023'
      ]
    },
    col2_abstract: {
      'images': [
            "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            "https://images.unsplash.com/photo-1570676181690-23526921c214?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1607180838502-f08b21c92f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
    },
    col3_abstract: {
      'images': [
        "https://images.unsplash.com/photo-1542513828-03fbfcae005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1607707972895-7f994d8c2f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
        "https://images.unsplash.com/photo-1530088018703-11b253bae577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        "https://images.unsplash.com/photo-1606940510058-cfa43c161dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
    }
    ,col1_nature: {
      'images': [
        "https://images.unsplash.com/photo-1513157060608-f5117117a051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1506508839781-65d2a514b73a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80",
        "https://images.unsplash.com/photo-1579477486301-fb2edffc44a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },

     col2_nature: {
      'images': [
        "https://images.unsplash.com/uploads/1411040661312f50ec8e2/ded9d54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1655321592369-0c284346c827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        "https://images.unsplash.com/photo-1676584358837-4b02f2945a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
        "https://images.unsplash.com/photo-1664585356004-8f04f5db6be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },

     col3_nature: {
      'images': [
        "https://images.unsplash.com/photo-1676643136045-6cfe7eb1fef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1676516952619-b57378bee190?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1676774351324-62a60179b18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1658518482834-f9907f8dfa10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },
     col1_product: {
      'images': [
             "https://images.unsplash.com/photo-1621252295289-8f1c464ade4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
             "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
             "https://images.unsplash.com/photo-1618936260827-4bc94b7c2237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80",
             "https://images.unsplash.com/photo-1603547547037-cb2289fecaa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },
     col2_product: {
      'images': [
            "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            "https://images.unsplash.com/photo-1615396899839-c99c121888b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1583394432927-30ce301d5ddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },
     col3_product: {
      'images': [
            "https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1543422018-9a1c40cf955d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
            "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"       
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },
     col1_food: {
      'images': [
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
              "https://images.unsplash.com/photo-1576830673997-8c76ff5c941d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
              "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"       
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },
     col2_food: {
      'images': [
            "https://images.unsplash.com/photo-1570197571499-166b36435e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1616861502237-425e8089c690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1644447393594-86ac32d94a09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"    
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },
     col3_food: {
      'images': [
          "https://images.unsplash.com/photo-1618414466256-4b62f39b5b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
          "https://images.unsplash.com/photo-1589113705163-688db004aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"      
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },

     col1_travel: {
      'images': [
            "https://images.unsplash.com/photo-1609470340424-1d5fe96f01b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1564456668701-dcc8f9b1b20f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            "https://images.unsplash.com/photo-1523635036170-f3509dbfc123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            "https://images.unsplash.com/photo-1656701565245-edc2c4a383e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"      
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },

     col2_travel: {
      'images': [
            "https://images.unsplash.com/photo-1668618586058-4623e14f23d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1570651851409-93d5add773d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1605087208434-87a5ca8814be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1676947615694-e56d12b4f1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"     
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },

     col3_travel: {
      'images': [
          "https://images.unsplash.com/photo-1669410611348-326504580445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80",
          "https://images.unsplash.com/photo-1650969204612-ff0ef8e7da6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          "https://images.unsplash.com/photo-1634048703492-eeded62bb987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          "https://images.unsplash.com/photo-1670957585000-85ea76e6b370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"    
       ],
       'images_shot_using': [
         'Nikon', 
         'Canon EOS', 
         'Canon EOS', 
         'Nikon 500'
       ],
       'images_location': [
         'Paris', 
         'USA', 
         'London', 
         'Paris'
       ],
       'images_date': [
         'March 15th, 2021', 
         'February 28th, 2020', 
         'December 27th, 2019',
         'May 13th, 2023'
       ]
     },
  }

  current_section:string = 'Abstract'; 

  intersect(section:string) {
    console.log(section);
    this.current_section = section; 
  }

  urlForCSS(url: string):string {
    return `url('${url}')`;
  }
}
