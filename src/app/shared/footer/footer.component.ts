import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
  .site-footer {
    padding-top: 72px;
    background-color: #374250
  }

  @media (max-width: 768px) {
      .site-footer {
          padding-top:48px
      }
  }

  .footer-copyright {
      margin: 0;
      padding-top: 10px;
      padding-bottom: 24px;
      color: rgba(255,255,255,0.5);
      font-size: 14px;
      font-weight: normal
  }

  .footer-copyright>a {
      transition: color .25s;
      color: rgba(255,255,255,0.5);
      text-decoration: none
  }

  .footer-copyright>a:hover {
      color: #0da9ef
  }

  .footer-light {
      background-color: #f5f5f5
  }

  .footer-light .footer-copyright {
      color: #9da9b9
  }

  .footer-light .footer-copyright>a {
      color: #9da9b9
  }

  .footer-light .footer-copyright>a:hover {
      color: #0da9ef
  }

  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .widget-title {
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e1e7ec;
    color: #9da9b9;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase
  }

  .widget {
      margin-bottom: 38px
  }

  .widget .form-group {
      margin-bottom: 0
  }

  .widget ul {
      margin-bottom: 12px
  }

  .widget .market-button:last-child {
      margin-bottom: 0
  }

  .widget .custom-control:last-child {
      margin-bottom: 0 !important
  }

  .widget-categories ul,.widget-links ul {
      margin: 0;
      padding: 0;
      list-style: none
  }

  .widget-categories ul>li,.widget-links ul>li {
      position: relative;
      margin-bottom: 5px;
      padding-left: 14px
  }

  .widget-categories ul>li:last-child,.widget-links ul>li:last-child {
      margin-bottom: 0
  }

  .widget-categories ul>li::before,.widget-links ul>li::before {
      display: block;
      position: absolute;
      top: 12px;
      left: 0;
      width: 0;
      height: 0;
      -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
      transition: -webkit-transform .35s;
      transition: transform .35s;
      border-top: 4px dashed;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
      color: #9da9b9;
      content: ''
  }

  .widget-categories ul>li>a,.widget-links ul>li>a {
      display: inline-block;
      transition: color .3s;
      color: #606975;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none
  }

  .widget-categories ul>li>a:hover,.widget-links ul>li>a:hover {
      color: #0da9ef
  }

  .widget-categories ul>li.active>a,.widget-links ul>li.active>a {
      color: #0da9ef
  }

  .widget-categories ul>li>span,.widget-links ul>li>span {
      margin-left: 4px;
      color: #9da9b9
  }

  .widget-categories ul>li.has-children ul,.widget-links ul>li.has-children ul {
      border-left: 1px solid #dee5ea
  }

  .widget-categories ul>li.has-children ul li::before,.widget-links ul>li.has-children ul li::before {
      top: 14px;
      width: 8px;
      height: 1px;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
      border: 0;
      background-color: #dee5ea;
      color: transparent
  }

  .widget-categories ul>li.has-children ul li a,.widget-links ul>li.has-children ul li a {
      font-size: 13px
  }

  .widget-categories ul>li.has-children ul ul>li,.widget-links ul>li.has-children ul ul>li {
      margin-bottom: 0
  }

  .widget-categories ul>li.has-children>ul,.widget-links ul>li.has-children>ul {
      max-height: 0;
      transition: max-height .6s;
      overflow: hidden
  }

  .widget-categories ul>li.has-children.expanded::before,.widget-links ul>li.has-children.expanded::before {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      transform: rotate(0)
  }

  .widget-categories ul>li.has-children.expanded>ul,.widget-links ul>li.has-children.expanded>ul {
      max-height: 1000px
  }

  .widget-featured-posts>.entry,.widget-featured-products>.entry {
      display: table;
      width: 100%;
      margin-bottom: 18px
  }

  .widget-featured-posts>.entry .entry-thumb,.widget-featured-posts>.entry .entry-content,.widget-featured-products>.entry .entry-thumb,.widget-featured-products>.entry .entry-content {
      display: table-cell;
      vertical-align: middle
  }

  .widget-featured-posts>.entry .entry-thumb,.widget-featured-products>.entry .entry-thumb {
      width: 62px;
      padding-right: 12px
  }

  .widget-featured-posts>.entry .entry-thumb>a,.widget-featured-products>.entry .entry-thumb>a {
      display: block;
      border-radius: 50%;
      overflow: hidden
  }

  .widget-featured-posts>.entry .entry-thumb>a>img,.widget-featured-products>.entry .entry-thumb>a>img {
      width: 100%
  }

  .widget-featured-posts>.entry .entry-title,.widget-featured-products>.entry .entry-title {
      margin-bottom: 0;
      font-size: 14px
  }

  .widget-featured-posts>.entry .entry-title>a,.widget-featured-products>.entry .entry-title>a {
      transition: color .3s;
      color: #606975;
      font-weight: 500;
      text-decoration: none
  }

  .widget-featured-posts>.entry .entry-title>a:hover,.widget-featured-products>.entry .entry-title>a:hover {
      color: #0da9ef
  }

  .widget-featured-posts>.entry .entry-meta,.widget-featured-products>.entry .entry-meta {
      display: block;
      margin-bottom: 0;
      padding-top: 4px;
      color: #9da9b9;
      font-size: 12px
  }

  .widget-featured-products>.entry {
      margin-bottom: 12px
  }

  .widget-featured-products>.entry .entry-thumb>a {
      border-radius: 0
  }

  .widget-featured-products>.entry .entry-meta {
      color: #606975;
      font-size: 13px
  }

  .facebook-btn,.twitter-btn,.google-btn {
    text-transform: none
}

.facebook-btn>i,.twitter-btn>i,.google-btn>i {
    margin-top: 0
}

.facebook-btn {
    border-color: #3b5998;
    background-color: transparent;
    color: #3b5998
}

.facebook-btn:hover {
    background-color: #3b5998;
    color: #fff
}

.twitter-btn {
    border-color: #55acee;
    background-color: transparent;
    color: #55acee
}

.twitter-btn:hover {
    background-color: #55acee;
    color: #fff
}

.google-btn {
    border-color: #dd4b39;
    background-color: transparent;
    color: #dd4b39
}

.google-btn>i {
    font-size: 1.3em
}

.google-btn:hover {
    background-color: #dd4b39;
    color: #fff
}

.social-button {
    display: inline-block;
    margin-top: 5px;
    margin-right: 18px;
    margin-bottom: 5px;
    transition: color .3s;
    color: #606975;
    font-size: 13px;
    text-decoration: none;
    vertical-align: middle
}

.social-button.shape-circle,.social-button.shape-rounded,.social-button.shape-square {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    border: 1px solid #e1e7ec;
    line-height: 35px;
    text-align: center
}

.social-button.shape-circle {
    border-radius: 50%
}

.social-button.shape-rounded {
    border-radius: 5px
}

.social-button:focus {
    text-decoration: none
}

.text-center .social-button {
    margin-right: 9px;
    margin-left: 9px
}

.text-center .social-button.shape-circle,.text-center .social-button.shape-rounded,.text-center .social-button.shape-square {
    margin-right: 4px;
    margin-left: 4px
}

.text-right .social-button {
    margin-right: 0;
    margin-left: 18px
}

.text-right .social-button.shape-circle,.text-right .social-button.shape-rounded,.text-right .social-button.shape-square {
    margin-right: 0;
    margin-left: 8px
}

.sb-amazon {
    font-size: 1.15em !important
}

.sb-amazon:hover,.sb-amazon:focus {
    color: #ff9900 !important
}

.sb-airbnb:hover,.sb-airbnb:focus {
    color: #fd5c63 !important
}

.sb-behance {
    font-size: 1.1em !important
}

.sb-behance:hover,.sb-behance:focus {
    color: #1769ff !important
}

.sb-deviantart {
    font-size: 1.2em !important
}

.sb-deviantart:hover,.sb-deviantart:focus {
    color: #4e6252 !important
}

.sb-digg {
    font-size: 1.2em !important
}

.sb-digg:hover,.sb-digg:focus {
    color: #000000 !important
}

.sb-disqus {
    font-size: 1.1em !important
}

.sb-disqus:hover,.sb-disqus:focus {
    color: #2e9fff !important
}

.sb-dribbble:hover,.sb-dribbble:focus {
    color: #ea4c89 !important
}

.sb-drupal {
    font-size: 1.1em !important
}

.sb-drupal:hover,.sb-drupal:focus {
    color: #0077c0 !important
}

.sb-email:hover,.sb-email:focus {
    color: #0da9ef !important
}

.sb-facebook:hover,.sb-facebook:focus {
    color: #3b5998 !important
}

.sb-flickr:hover,.sb-flickr:focus {
    color: #0063dc !important
}

.sb-foursquare:hover,.sb-foursquare:focus {
    color: #ef4b78 !important
}

.sb-github:hover,.sb-github:focus {
    color: #4183c4 !important
}

.sb-google-plus {
    font-size: 1.2em !important
}

.sb-google-plus:hover,.sb-google-plus:focus {
    color: #dd4b39 !important
}

.sb-instagram:hover,.sb-instagram:focus {
    color: #3f729b !important
}

.sb-lastfm {
    font-size: 1.1em !important
}

.sb-lastfm:hover,.sb-lastfm:focus {
    color: #e31b23 !important
}

.sb-linkedin:hover,.sb-linkedin:focus {
    color: #0976b4 !important
}

.sb-odnoklassniki {
    font-size: 1.1em !important
}

.sb-odnoklassniki:hover,.sb-odnoklassniki:focus {
    color: #ed812b !important
}

.sb-paypal {
    font-size: .9em !important
}

.sb-paypal:hover,.sb-paypal:focus {
    color: #253b80 !important
}

.sb-pinterest:hover,.sb-pinterest:focus {
    color: #cc2127 !important
}

.sb-reddit {
    font-size: 1.1em !important
}

.sb-reddit:hover,.sb-reddit:focus {
    color: #ff4500 !important
}

.sb-rss {
    font-size: .9em !important
}

.sb-rss:hover,.sb-rss:focus {
    color: #f26522 !important
}

.sb-skype {
    font-size: .9em !important
}

.sb-skype:hover,.sb-skype:focus {
    color: #00aff0 !important
}

.sb-soundcloud {
    font-size: 1.2em !important
}

.sb-soundcloud:hover,.sb-soundcloud:focus {
    color: #ff8800 !important
}

.sb-stackoverflow:hover,.sb-stackoverflow:focus {
    color: #fe7a15 !important
}

.sb-steam:hover,.sb-steam:focus {
    color: #7da10e !important
}

.sb-stumbleupon:hover,.sb-stumbleupon:focus {
    color: #eb4924 !important
}

.sb-tumblr:hover,.sb-tumblr:focus {
    color: #35465c !important
}

.sb-twitch:hover,.sb-twitch:focus {
    color: #6441a5 !important
}

.sb-twitter:hover,.sb-twitter:focus {
    color: #55acee !important
}

.sb-vimeo:hover,.sb-vimeo:focus {
    color: #1ab7ea !important
}

.sb-vine:hover,.sb-vine:focus {
    color: #00b488 !important
}

.sb-vk {
    font-size: 1.1em !important
}

.sb-vk:hover,.sb-vk:focus {
    color: #45668e !important
}

.sb-wordpress:hover,.sb-wordpress:focus {
    color: #21759b !important
}

.sb-xing:hover,.sb-xing:focus {
    color: #026466 !important
}

.sb-yahoo {
    font-size: 1.1em !important
}

.sb-yahoo:hover,.sb-yahoo:focus {
    color: #400191 !important
}

.sb-yelp:hover,.sb-yelp:focus {
    color: #af0606 !important
}

.sb-youtube:hover,.sb-youtube:focus {
    color: #e52d27 !important
}

.sb-light-skin {
    transition: all .3s;
    background-color: transparent;
    color: rgba(255,255,255,0.6) !important
}

.sb-light-skin:hover,.sb-light-skin:focus {
    color: #fff !important
}

.sb-light-skin.shape-circle,.sb-light-skin.shape-rounded,.sb-light-skin.shape-square {
    border-color: rgba(255,255,255,0.12)
}

.sb-light-skin.shape-circle:hover,.sb-light-skin.shape-rounded:hover,.sb-light-skin.shape-square:hover {
    background-color: rgba(255,255,255,0.06)
}
.widget-light-skin .widget-title {
  border-color: rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.5)
}

.widget-light-skin.widget-categories ul>li::before,.widget-light-skin.widget-links ul>li::before {
  color: rgba(255,255,255,0.15)
}

.widget-light-skin.widget-categories ul>li>a,.widget-light-skin.widget-links ul>li>a {
  color: #fff
}

.widget-light-skin.widget-categories ul>li>a:hover,.widget-light-skin.widget-links ul>li>a:hover {
  color: #0da9ef
}

.widget-light-skin.widget-categories ul>li.active>a,.widget-light-skin.widget-links ul>li.active>a {
  color: #0da9ef
}

.widget-light-skin.widget-categories ul>li>span,.widget-light-skin.widget-links ul>li>span {
  color: rgba(255,255,255,0.5)
}

.widget-light-skin.widget-featured-posts>.entry .entry-title>a,.widget-light-skin.widget-featured-products>.entry .entry-title>a {
  color: #fff
}

.widget-light-skin.widget-featured-posts>.entry .entry-title>a:hover,.widget-light-skin.widget-featured-products>.entry .entry-title>a:hover {
  color: #0da9ef
}

.widget-light-skin.widget-featured-posts>.entry .entry-meta,.widget-light-skin.widget-featured-products>.entry .entry-meta {
  color: rgba(255,255,255,0.5)
}

.widget-light-skin .tag {
  border-color: rgba(255,255,255,0.12);
  color: #fff !important
}

.widget-light-skin .tag:hover {
  background-color: #f5f5f5;
  color: #606975 !important
}

.widget-light-skin .tag.active {
  border-color: #0da9ef;
  background-color: #0da9ef;
  color: #fff !important
}

.market-button {
  display: inline-block;
  margin-right: 14px;
  margin-bottom: 14px;
  padding: 5px 14px 5px 45px;
  transition: background-color .3s;
  border: 1px solid #e1e7ec;
  border-radius: 5px;
  background-position: center left 12px;
  background-color: #fff;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  text-decoration: none
}

.market-button:hover {
  background-color: #f5f5f5
}

.market-button .mb-subtitle {
  display: block;
  margin-bottom: -4px;
  color: #9da9b9;
  font-size: 12px
}

.market-button .mb-title {
  display: block;
  color: #606975;
  font-size: 18px
}

.market-button.apple-button {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiMyZTJlMmUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
}

.market-button.google-button {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
}

.market-button.windows-button {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4MCA0ODA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMC4xNzYsMjI0TDAuMDAxLDY3Ljk2M2wxOTItMjYuMDcyVjIyNEgwLjE3NnogTTIyNC4wMDEsMzcuMjQxTDQ3OS45MzcsMHYyMjRIMjI0LjAwMVYzNy4yNDF6IE00NzkuOTk5LDI1NmwtMC4wNjIsMjI0ICAgbC0yNTUuOTM2LTM2LjAwOFYyNTZINDc5Ljk5OXogTTE5Mi4wMDEsNDM5LjkxOEwwLjE1Nyw0MTMuNjIxTDAuMTQ3LDI1NmgxOTEuODU0VjQzOS45MTh6IiBmaWxsPSIjMDBiY2YyIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
}

.market-button.blackberry-button {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MDMuMzIyIDUwMy4zMjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwMy4zMjIgNTAzLjMyMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMTYuMjg1LDYwLjc0Nkg0NS45OTNsLTIwLjgyNyw5NS40NThoNzMuNzYzYzU3LjI3NSwwLDczLjc2My0yOC42MzcsNzMuNzYzLTUzLjgwMyAgICBDMTczLjU1OSw4NC4xNzYsMTYyLjI3OCw2MC43NDYsMTE2LjI4NSw2MC43NDZ6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjM4LjY0NCwzNDcuMTE5aC03MS4xNTlsLTE5Ljk1OSw5NS40NThoNzMuNzYzYzU3LjI3NSwwLDczLjc2My0yOC42MzcsNzMuNzYzLTUzLjgwMyAgICBDMjk1LjA1MSwzNzAuNTQ5LDI4NC42MzcsMzQ3LjExOSwyMzguNjQ0LDM0Ny4xMTl6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNOTEuMTE5LDE5OS41OTNIMTkuOTU5TDAsMjk1LjA1MWg3My43NjNjNTcuMjc1LDAsNzMuNzYzLTI4LjYzNyw3My43NjMtNTMuODAzICAgIEMxNDcuNTI1LDIyMy4wMjQsMTM3LjExMiwxOTkuNTkzLDkxLjExOSwxOTkuNTkzeiIgZmlsbD0iIzJlMmUyZSIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyMC44ODEsMjk1LjA1MWgtNzEuMTU5bC0xOS45NTksODYuNzhoNzMuNzYzYzU3LjI3NSwwLDczLjc2My0yNC4yOTgsNzMuNzYzLTQ5LjQ2NCAgICBDNDc3LjI4OCwzMTQuMTQyLDQ2Ni44NzUsMjk1LjA1MSw0MjAuODgxLDI5NS4wNTF6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDQ2LjkxNSwxNDcuNTI1aC03MS4xNTlsLTE5Ljk1OSw4Ni43OGg3My43NjNjNTcuMjc1LDAsNzMuNzYzLTI0LjI5OCw3My43NjMtNDkuNDY0ICAgIEM1MDMuMzIyLDE2Ni42MTcsNDkyLjkwOCwxNDcuNTI1LDQ0Ni45MTUsMTQ3LjUyNXoiIGZpbGw9IiMyZTJlMmUiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNjUuNTQ2LDE5OS41OTNoLTcxLjE1OWwtMTkuOTU5LDk1LjQ1OGg3My43NjNjNTcuMjc1LDAsNzMuNzYzLTI4LjYzNyw3My43NjMtNTMuODAzICAgIEMzMjIuODIsMjIzLjAyNCwzMTEuNTM5LDE5OS41OTMsMjY1LjU0NiwxOTkuNTkzeiIgZmlsbD0iIzJlMmUyZSIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI5MS41OCw2MC43NDZIMjIwLjQybC0xOS45NTksOTUuNDU4aDczLjc2M2M1Ny4yNzUsMCw3My43NjMtMjguNjM3LDczLjc2My01My44MDMgICAgQzM0Ny45ODYsODQuMTc2LDMzNy41NzMsNjAuNzQ2LDI5MS41OCw2MC43NDZ6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
}

.market-button.amazon-button {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo1RDIwODkyNDkzQkZEQjExOTE0QTg1OTBEMzE1MDhDOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQUJGNjhGNDRGNkMxMUU3OUY5REJEQzBGNkVBQUI5QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQUJGNjhGMzRGNkMxMUU3OUY5REJEQzBGNkVBQUI5QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QUM1ODJFMkIxNEExMUUzQkY1NEUzQkNCRjlEODA1RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QUM1ODJFM0IxNEExMUUzQkY1NEUzQkNCRjlEODA1RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4g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)
}

.market-button.mb-light-skin {
  border-color: rgba(255,255,255,0.12);
  background-color: transparent
}

.market-button.mb-light-skin .mb-subtitle,.market-button.mb-light-skin .mb-title {
  color: #fff
}

.market-button.mb-light-skin .mb-subtitle {
  opacity: .55
}

.market-button.mb-light-skin:hover {
  background-color: rgba(255,255,255,0.06)
}

.market-button.mb-light-skin.apple-button {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
}

.market-button.mb-light-skin.blackberry-button {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MDMuMzIyIDUwMy4zMjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwMy4zMjIgNTAzLjMyMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMTYuMjg1LDYwLjc0Nkg0NS45OTNsLTIwLjgyNyw5NS40NThoNzMuNzYzYzU3LjI3NSwwLDczLjc2My0yOC42MzcsNzMuNzYzLTUzLjgwMyAgICBDMTczLjU1OSw4NC4xNzYsMTYyLjI3OCw2MC43NDYsMTE2LjI4NSw2MC43NDZ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjM4LjY0NCwzNDcuMTE5aC03MS4xNTlsLTE5Ljk1OSw5NS40NThoNzMuNzYzYzU3LjI3NSwwLDczLjc2My0yOC42MzcsNzMuNzYzLTUzLjgwMyAgICBDMjk1LjA1MSwzNzAuNTQ5LDI4NC42MzcsMzQ3LjExOSwyMzguNjQ0LDM0Ny4xMTl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNOTEuMTE5LDE5OS41OTNIMTkuOTU5TDAsMjk1LjA1MWg3My43NjNjNTcuMjc1LDAsNzMuNzYzLTI4LjYzNyw3My43NjMtNTMuODAzICAgIEMxNDcuNTI1LDIyMy4wMjQsMTM3LjExMiwxOTkuNTkzLDkxLjExOSwxOTkuNTkzeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyMC44ODEsMjk1LjA1MWgtNzEuMTU5bC0xOS45NTksODYuNzhoNzMuNzYzYzU3LjI3NSwwLDczLjc2My0yNC4yOTgsNzMuNzYzLTQ5LjQ2NCAgICBDNDc3LjI4OCwzMTQuMTQyLDQ2Ni44NzUsMjk1LjA1MSw0MjAuODgxLDI5NS4wNTF6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDQ2LjkxNSwxNDcuNTI1aC03MS4xNTlsLTE5Ljk1OSw4Ni43OGg3My43NjNjNTcuMjc1LDAsNzMuNzYzLTI0LjI5OCw3My43NjMtNDkuNDY0ICAgIEM1MDMuMzIyLDE2Ni42MTcsNDkyLjkwOCwxNDcuNTI1LDQ0Ni45MTUsMTQ3LjUyNXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNjUuNTQ2LDE5OS41OTNoLTcxLjE1OWwtMTkuOTU5LDk1LjQ1OGg3My43NjNjNTcuMjc1LDAsNzMuNzYzLTI4LjYzNyw3My43NjMtNTMuODAzICAgIEMzMjIuODIsMjIzLjAyNCwzMTEuNTM5LDE5OS41OTMsMjY1LjU0NiwxOTkuNTkzeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI5MS41OCw2MC43NDZIMjIwLjQybC0xOS45NTksOTUuNDU4aDczLjc2M2M1Ny4yNzUsMCw3My43NjMtMjguNjM3LDczLjc2My01My44MDMgICAgQzM0Ny45ODYsODQuMTc2LDMzNy41NzMsNjAuNzQ2LDI5MS41OCw2MC43NDZ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
}

.market-button.mb-light-skin.amazon-button {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo1RDIwODkyNDkzQkZEQjExOTE0QTg1OTBEMzE1MDhDOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QjFCQzQ2QjRGNkQxMUU3OUY5REJEQzBGNkVBQUI5QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QjFCQzQ2QTRGNkQxMUU3OUY5REJEQzBGNkVBQUI5QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QUM1ODJFMkIxNEExMUUzQkY1NEUzQkNCRjlEODA1RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QUM1ODJFM0IxNEExMUUzQkY1NEUzQkNCRjlEODA1RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4g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)
}




  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
