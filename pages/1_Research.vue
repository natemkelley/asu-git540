<template>
    <div>
      <div class="section row">
        <h2>Introduction</h2>
        <p>The water tower located directly east of ASU’s Polytechnic campus has long been a symbol of the school of engineering and technology and the Polytechnic campus in general. I have laid out my findings in two parts: 1) Simple documentation of the water tower and 2) historical and modern use of the tower. The data was collected over from August 24th to September 4th through the form of pictures, videos, emails, and database searches.
        </p>
        <div class="col s6">
          <image-meta imageURL='camerawt3.jpg' caption='ASU Polytechnic Water Tower'></image-meta>
        </div>
        <div class="col s6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1057493735793!2d-111.68337608523012!3d33.30497956418537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bad9da91c6cfb%3A0x2cea71a339eed28a!2sWater%20Tower%2C%20Mesa%2C%20AZ%2085212!5e1!3m2!1sen!2sus!4v1567013677626!5m2!1sen!2sus" width="100%" height="390" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <div class="col s12">
          <iframe src="https://www.google.com/maps/embed?pb=!4v1567641373215!6m8!1m7!1sAvh7pPlv0axaLoRBuwdGbg!2m2!1d33.30478192353348!2d-111.6807584889742!3f296.76468564767305!4f17.83361705504882!5f1.0063043547592547" width="100%" height="420" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
      </div>
      <div class="divider"></div>
      <div class="section row">
        <h2>Documenting the Tower</h2>
        <p>I began my observation of the tower by taking pictures and videos of what I saw from different angles and distances. Below are some of my significant initial findings.
        </p>
        <ul class="">
          <li class="collection-item">The tower has the standard ASU logo painted on two sides with little to no wear or aging.</li>
          <li class="collection-item">Wireless radio panels line all sides of the legs located about 100 feet above ground.</li>
          <li class="collection-item">An indicator with 39 "steps" sits on one side of the tower. My initial suspicion is that the gage measures the water level. On the day I observed it (August 26th) the indicator was at close to '1'. </li>
          <li class="collection-item">A red pulsing light sits atop the tower most likely to alert pilots of its presence.</li>
          <li class="collection-item">The entire tower, including the legs, are a matte silver color.</li>
        </ul>
        <div class="grid">
          <div class="grid-sizer"></div>
          <div v-for="n in 4">
              <div class="grid-item">
                <image-meta :imageURL="'camerawt'+n+'.jpg'" :caption="'August 26th observation - '+n" v-on:dunzo="dunzo($event)" ></image-meta>
              </div>
          </div>
          <div v-for="vid in vids">
              <responsive-video class="grid-item" :videoURL='vid'></responsive-video>
          </div>
        </div>
      </div>

      <div class="section row">
        <h2>Historical Findings</h2>
        <p>
          After visiting the physical location, I decided to look at aerial photographs and 3D models in Google Earth. As you will see from the photos below, the tower sits on a compound that is roughly 7800 square yards. The tower originally had utility buildings sitting on its compound. However, those buildings were removed between 2013 and 2015. My guess is these buildings helped move water into the tower. Now that those buildings are gone, I believe the tower is no longer used to store water.
        </p>
        <h5>Google Earth Model Images</h5>
        <div class="grid">
          <div class="grid-sizer"></div>
          <div v-for="img in modelImg">
              <div class="grid-item">
                <image-meta :caption="img.capt" :imageURL="img.name" v-on:dunzo="dunzo($event)" ></image-meta>
              </div>
          </div>
        </div>
        <h5>Google Earth Historical Images</h5>
        <div class="grid">
          <div class="grid-sizer"></div>
          <div v-for="img in earthImg">
              <div class="grid-item">
                <image-meta :caption="img.capt" :imageURL="img.name" v-on:dunzo="dunzo($event)" ></image-meta>
              </div>
          </div>
        </div>

        <div class="section row">
          <h4>A trip to facitilies services</h4>
          <div class="col m5">
            <responsive-video :videoURL='facServiceVid'></responsive-video>
          </div>
          <div class="col m7">
            <p>I then went to Facilities Services just North of the ASU Water Tower to find out if the tower was still in use. After talking with multiple people at that office (I was not able to take audio), they informed me that although the tower is branded with ASU’s logo, it is neither owned nor operated by ASU. The tower is in fact owned by the city of Mesa and it has not been used for many years. To the best of Facilities Service’s knowledge, they think that Ed Soltero (ASU’s Vice President over University Architecture) has worked with the city of Mesa to paint and repaint the logo on the tower. They then told me to contact ASU's archives to find out more.
            </p>
          </div>
        </div>
        <div class="section row">
          <div class="col m12">
            <h4>ASU Archives and Emails to Nearby Cities</h4>
            <p>I spoke briefly with the library at Polytechnic and they had no information regarding the tower but suggested that I contact ASU archives. Then, after a series of <a href="/email.pdf" target="_blank">emails</a> with the archives, I found that ASU does not have any information regarding the water tower likely due to the fact that it is not owned by them. However, they directed me to the cities of Chandler, Mesa, and Gilbert and their archives as well as the National Park Services archives. There I found some older photos of William’s Airforce base as well as information regarding the tower’s registry as a historical place in 1993. The tower was constructed in 1941 and has remained the same structure ever since with the occasional repainting over the years.</p>
            <p>While none of my correspance with the cities knew when the tower went out of commision, it was likely just before it was made a historic landmake by the NPS in 1993</p>
          </div> 
            <div class="col m6">
              <pdf-iframe pdfURL="wt1.pdf"></pdf-iframe>
            </div>
            <div class="col m6">
              <pdf-iframe pdfURL="wt2.pdf"></pdf-iframe>
            </div>
            
            <div class="col m6 halfy">
              <image-meta imageURL="2009tower.jpg" caption="Tower is rebranded with ASU - 2009"></image-meta>
            </div>
            <div class="col m6 halfy">
              <image-meta imageURL="1954Tower.jpg" caption="The tower is in the lower right - 1954"></image-meta>
            </div>
        </div>
        <div class="section row">
          <h4>Summary of Findings</h4>
          <ul>
            <li class="collection-item">The tower was constructed in 1941 to service the Williams Field Airforce Base</li>
            <li class="collection-item">It&rsquo;s owned by the City of Mesa and has been since 1993</li>
            <li class="collection-item">The tower is no longer in use</li>
            <li class="collection-item">It has seen multiple paint jobs over the years, initially being steel, checkered, white, and finally matte silver.</li>
            <li class="collection-item">The primary function of the tower now is to hold wireless radio panels with a secondary purpose of showing ASU&rsquo;s brand on the side</li>
            <li class="collection-item">Public information regarding ASU's water tower published by ASU is found at <a href="https://tours.asu.edu/polytechnic/points-of-pride/water-tower" target="_blank">https://tours.asu.edu/polytechnic/points-of-pride/water-tower</a></li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
import ImageMeta from '~/components/ImageWithMeta'
import ResponsiveVideo from '~/components/ResponsiveVideo'
import PdfIframe from '~/components/pdfIframe';
import Masonry from 'masonry-layout';

//iframe

export default {
  components: {
    ImageMeta,
    ResponsiveVideo,
    PdfIframe
  },
  data: function () {
      return {
          vids: [
          'https://lh3.googleusercontent.com/_YFPXPEeHcrqMGT1dKNhzzOEtinSkYu6UF6E0MT5eQi5ZT0oNUQTDyC0JO6rjij5bS5mWlhUr4XWzI1yvu7kGGF9hEbgQky7rPsamlL5fPipLTxRnx6Q0uPH0-JsUp4RWbizlk0eBSk=m37',
          'https://lh3.googleusercontent.com/ceJqy7JUTfwAuQPIiyoUas13h_GTLkEUjWr0F0C4MvkT4iNSeX3MAZcmjnJiLJlSMDT5hAYcOhceWUxKwREzrv6KQnOBmu6mrkbq34RCemxeUOWN3fyGs8RO2SCql13hP-CzON57Dpc=m37',
          'https://lh3.googleusercontent.com/ydl2J2E6-rMAz5opzVzVeNptH530QDBjYBYLlUEmzBqt75yJ3zJ33x7HW0kHAcTtHjXnFJ1bl-UQsQtqdHYj_t4TBIssfdjFiybD3Z2y8H6lwQepFAphx8wkHCOWwUJkdDQWYt01_XU=m37'
          ],
          msry: null,
          msry2: null,
          msry3: null,
          modelImg:[{name:'wt3.jpg',capt:'Google Earth Model'},{name:'wt4.jpg',capt:'Google Earth Model - 2'},{name:'wt5.jpg',capt:'Google Earth Model - 3'}],
          earthImg:[{name:'wt7.jpg',capt:'Google Earth - 1997'},{name:'wt10.jpg',capt:'Google Earth - 2010'},{name:'wt11.jpg',capt:'Google Earth - 2013'},{name:'wt6-2.jpg',capt:'Google Earth - 2015'},{name:'2018.png',capt:'Google Earth - 2018'}],
          historicalImages: [],
          facServiceVid:'https://lh3.googleusercontent.com/_1ZEDWhK_9DGr7VrWLV3gMwi_gp87_VRWdw45gu0Z3CIDFRWuajuaGf4cngZHFu_cgwlTBzNxjSLZQ_f8BBgJ6SKYZw9IKKJ1FbNZPf3M9SqVjmKGfrdyD7omZD6XMkyHkggJ6lNLDo=m37'
      }
  },
  mounted(){
    this.createGrids();
  },
  methods:{
    createGrids: function() {
        var options = {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            transitionDuration: '0.3s',
            gutter: 5,
            horizontalOrder: true
        };
        var grid = this.$el.querySelector('.grid');
        var grid2 = this.$el.querySelectorAll('.grid')[1];
        var grid3 = this.$el.querySelectorAll('.grid')[2];
        this.msry = new Masonry(grid, options);
        this.msry2 = new Masonry(grid2, options);
        this.msry3 = new Masonry(grid3, options);
        this.msry.layout();
        this.msry2.layout();
        this.msry3.layout();
    },
    dunzo: function(data){
      this.msry.layout();
      this.msry2.layout();
      this.msry3.layout();
    }
  }
}
</script>

<style scoped>
.collection-item{
  list-style-type: disc;
  margin-bottom: 5px;
}

.halfy{
  padding: 1%;
  margin: auto;
  width: 45%;
  float: left;
}
</style>
