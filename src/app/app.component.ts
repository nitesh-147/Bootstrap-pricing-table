import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-pricing-table';
  card = [
    {
      title: "free",
      price: 0,
      features: [
        {
          boldText: "",
          normalText: "Single User",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "5GB Storage",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Unlimited Public Projects",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Community Access",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Unlimited Private Projects",
          isDisabled: true
        },
        {
          boldText: "",
          normalText: "Dedicated Phone Support",
          isDisabled: true
        },
        {
          boldText: "",
          normalText: "Free Subdomain",
          isDisabled: true
        },
        {
          boldText:"",
          normalText:"Monthly Status Reports",
          isDisabled:true
        }
      ]
    },
    {
      title: "plus",
      price: 9,
      features: [
        {
          boldText: "5 Users",
          normalText: "",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "50GB Storage",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Unlimited Public Projects",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Community Access",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Unlimited Private Projects",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Dedicated Phone Support",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Free Subdomains",
          isDisabled: false
        },
        {
          boldText:"",
          normalText:"Monthly Status Reports",
          isDisabled:true
        }
      ]
    },
    {
      title: "pro",
      price: 49,
      features: [
        {
          boldText: "Unlimited Users",
          normalText: "",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "150GB Storage",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Unlimited Public Projects",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Community Access",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Unlimited Private Projects",
          isDisabled: false
        },
        {
          boldText: "",
          normalText: "Dedicated Phone Support",
          isDisabled: false
        },
        {
          boldText: "Unlimited",
          normalText: "Free Subdomains",
          isDisabled: false
        },
        {
          boldText:"",
          normalText:"Monthly Status Reports",
          isDisabled:false
        }
      ]
    },
  ];
}
