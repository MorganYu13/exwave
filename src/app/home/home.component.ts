import { Component } from '@angular/core';

interface Category {
  icon_color: string;
  images: string[];
  active: boolean;
  background_color: string; 
  images_location: string[]; 
  images_shot_using: string[]; 
  images_date: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  iconColor:string = "#FDADFF"; 

  themes:string[] = ['Abstract', 'Nature', 'Product', 'Food', 'Travel']; 

  categories : Record<string, Category> = {
    Abstract: {
     'active':true,
     'icon_color':'#FDADFF',
     'background_color':'#8EDC9F',
     'images': [
        'https://images.unsplash.com/photo-1587845323226-bad89242c735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1487&q=80', 
        'https://images.unsplash.com/photo-1473711409856-39138e48cb9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', 
        'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 
        'https://images.unsplash.com/photo-1644174735216-dcc1542d65b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1570676181690-23526921c214?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      ],
      'images_shot_using': [
        'Nikon', 
        'Canon EOS', 
        'Canon EOS', 
        'Nikon 500', 
        'iPhone X'
      ],
      'images_location': [
        'Paris', 
        'USA', 
        'London', 
        'Paris', 
        'India'
      ],
      'images_date': [
        'March 15th, 2021', 
        'February 28th, 2020', 
        'December 27th, 2019', 
        'Sepetember 16th, 2020', 
        'May 13th, 2023'
      ]
    },
    Nature: {
     'active':false, 
     'icon_color':'#BEEF99',
     'background_color':'#88AE3B',
     'images': [
        'https://images.unsplash.com/photo-1513157060608-f5117117a051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
        'https://images.unsplash.com/photo-1658518482834-f9907f8dfa10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80', 
        'https://images.unsplash.com/photo-1676643136045-6cfe7eb1fef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 
        'https://images.unsplash.com/photo-1676584358837-4b02f2945a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
        'https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
      ],
      'images_shot_using': [
        'Nikon', 
        'Canon EOS', 
        'Canon EOS', 
        'Nikon 500', 
        'iPhone X'
      ],
      'images_location': [
        'Paris', 
        'USA', 
        'London', 
        'Paris', 
        'India'
      ],
      'images_date': [
        'March 15th, 2021', 
        'February 28th, 2020', 
        'December 27th, 2019', 
        'Sepetember 16th, 2020', 
        'May 13th, 2023'
      ]
    },
    Product: { 
     'active':false, 
     'icon_color':'#F4D8CD',
     'background_color':'#DC947E',
     'images': [
        'https://images.unsplash.com/photo-1621252295289-8f1c464ade4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 
        'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
        'https://images.unsplash.com/photo-1618936260827-4bc94b7c2237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80', 
        'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        'https://images.unsplash.com/photo-1615396899839-c99c121888b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      ],
      'images_shot_using': [
        'Nikon', 
        'Canon EOS', 
        'Canon EOS', 
        'Nikon 500', 
        'iPhone X'
      ],
      'images_location': [
        'Paris', 
        'USA', 
        'London', 
        'Paris', 
        'India'
      ],
      'images_date': [
        'March 15th, 2021', 
        'February 28th, 2020', 
        'December 27th, 2019', 
        'Sepetember 16th, 2020', 
        'May 13th, 2023'
      ]
    },
    Food: {
     'active':false,
     'icon_color':'#EB8166', 
     'background_color': '#D8532E',
     'images': [
        'https://images.unsplash.com/photo-1570197571499-166b36435e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80', 
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
        'https://images.unsplash.com/photo-1618414466256-4b62f39b5b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80', 
        'https://images.unsplash.com/photo-1576830673997-8c76ff5c941d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80', 
        'https://images.unsplash.com/photo-1589113705163-688db004aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      ],
      'images_shot_using': [
        'Nikon', 
        'Canon EOS', 
        'Canon EOS', 
        'Nikon 500', 
        'iPhone X'
      ],
      'images_location': [
        'Paris', 
        'USA', 
        'London', 
        'Paris', 
        'India'
      ],
      'images_date': [
        'March 15th, 2021', 
        'February 28th, 2020', 
        'December 27th, 2019', 
        'Sepetember 16th, 2020', 
        'May 13th, 2023'
      ]
    },
    Travel: {
     'active':false, 
     'icon_color':'#C1EBFD',
     'background_color': '#4FA1E1',
     'images': [
      'https://images.unsplash.com/photo-1669410611348-326504580445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80', 
      'https://images.unsplash.com/photo-1609470340424-1d5fe96f01b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
      'https://images.unsplash.com/photo-1670957585000-85ea76e6b370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', 
      'https://images.unsplash.com/photo-1605087208434-87a5ca8814be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1634048703492-eeded62bb987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    ],
    'images_shot_using': [
      'Nikon', 
      'Canon EOS', 
      'Canon EOS', 
      'Nikon 500', 
      'iPhone X'
    ],
    'images_location': [
      'Paris', 
      'USA', 
      'London', 
      'Paris', 
      'India'
    ],
    'images_date': [
      'March 15th, 2021', 
      'February 28th, 2020', 
      'December 27th, 2019', 
      'Sepetember 16th, 2020', 
      'May 13th, 2023'
    ]
    }
  }
  

  current_category = 'Abstract';  

  get category_names(): Array<string> {
    return Object.keys(this.categories);
  }

  changeThemes(name:string) {
    console.log('hello ' + name);
    this.current_category = name;

    for(let category in this.categories) {
      this.categories[category].active = false; 
    }

    this.categories[name].active = true; 
  }

  urlForCSS(url: string):string {
    return `url('${url}')`;
  }
}
