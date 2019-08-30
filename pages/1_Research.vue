<template>
    <div>
      <div class="section row">
        <h2>Introduction</h2>
        <p>The water tower located directly east of ASU’s Polytechnic campus has long been a symbol of the school of engineering and technology and the Polytechnic campus in general. I have laid out my findings in two parts: 1) Simple documentation of the water tower and 2) historical and modern use of the tower as per my finding.
        </p>
        <div class="col s6">
          <image-meta imageURL='camerawt3.jpg'></image-meta>
        </div>
        <div class="col s6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1057493735793!2d-111.68337608523012!3d33.30497956418537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bad9da91c6cfb%3A0x2cea71a339eed28a!2sWater%20Tower%2C%20Mesa%2C%20AZ%2085212!5e1!3m2!1sen!2sus!4v1567013677626!5m2!1sen!2sus" width="100%" height="390" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
      </div>
      <div class="divider"></div>
      <div class="section row">
        <h2>Documenting the Tower</h2>
        <p>I began my observation of the tower by taking pictures and videos of what I saw it from different angles and distance. Below are some of my significant initial findings.</p>
        <ul class="">
          <li class="collection-item">The tower has the standard ASU logo painted on two sides with little to no wear.</li>
          <li class="collection-item">Cell phones wireless panels line all sides of the legs.</li>
          <li class="collection-item">An indicator with 39 steps sits on one side of the tower. My initial suspection is that the gage measures the water level. On the day I observed it the indicator was at close to '1'. </li>
          <li class="collection-item">A red pusleing light sits atop the tower most likely to alert pilots of its presence.</li>
        </ul>
        <div class="grid">
          <div class="grid-sizer"></div>
          <div v-for="n in 4">
              <div class="grid-item">
                <image-meta :imageURL="'camerawt'+n+'.jpg'" v-on:dunzo="dunzo($event)" ></image-meta>
              </div>
          </div>
          <div v-for="vid in vids">
              <responsive-video class="grid-item" :videoURL='vid'></responsive-video>
          </div>
        </div>
        <p>After visiting the physical location I decided to look at aerial photographs and models of it from Google Earth. I have included historical (timestamps shown) and contemporary screenshots from Google's archives. As you will see from the photos below, the tower sits on a compound that is roughly 7800 square yards and the tower itself is 190 feet tall. The tower originally had to utility building sitting on its compound but those building were removed between 2013 and 2015. My guess is these building helped move water into the tower. Now that those buildings are gone, I believe the tower is no longer used to store water.</p>
        <div class="grid">
          <div class="grid-sizer"></div>
          <div v-for="img in earthImg">
              <div class="grid-item">
                <image-meta :imageURL="img" v-on:dunzo="dunzo($event)" ></image-meta>
              </div>
          </div>
        </div>
      </div>

      <div class="section row">
        <h2>Historical Findings</h2>
        <p>After visiting the physical location I decided to look at aerial photographs and models of it from Google Earth. I have included historical (timestamps shown) and contemporary screenshots from Google's archives. As you will see from the photos below, the tower sits on a compound that is roughly 7800 square yards and the tower itself is 190 feet tall. The tower originally had to utility building sitting on its compound but those building were removed between 2013 and 2015. My guess is these building helped move water into the tower. Now that those buildings are gone, I believe the tower is no longer used to store water.</p>
        <div class="grid">
          <div class="grid-sizer"></div>
          <div v-for="img in earthImg">
              <div class="grid-item">
                <image-meta :imageURL="img" v-on:dunzo="dunzo($event)" ></image-meta>
              </div>
          </div>
        </div>
        <iframe src="https://www.aclweb.org/anthology/D18-1009" width="100%" height="500px">
        </iframe>
      </div>
    </div>
</template>

<script>
import ImageMeta from '~/components/ImageWithMeta'
import ResponsiveVideo from '~/components/ResponsiveVideo'
import Masonry from 'masonry-layout';

//iframe

export default {
  components: {
    ImageMeta,
    ResponsiveVideo
  },
  data: function () {
      return {
          vids: ['https://lh3.googleusercontent.com/_1ZEDWhK_9DGr7VrWLV3gMwi_gp87_VRWdw45gu0Z3CIDFRWuajuaGf4cngZHFu_cgwlTBzNxjSLZQ_f8BBgJ6SKYZw9IKKJ1FbNZPf3M9SqVjmKGfrdyD7omZD6XMkyHkggJ6lNLDo=m37',
          'https://lh3.googleusercontent.com/_YFPXPEeHcrqMGT1dKNhzzOEtinSkYu6UF6E0MT5eQi5ZT0oNUQTDyC0JO6rjij5bS5mWlhUr4XWzI1yvu7kGGF9hEbgQky7rPsamlL5fPipLTxRnx6Q0uPH0-JsUp4RWbizlk0eBSk=m37',
          'https://lh3.googleusercontent.com/ceJqy7JUTfwAuQPIiyoUas13h_GTLkEUjWr0F0C4MvkT4iNSeX3MAZcmjnJiLJlSMDT5hAYcOhceWUxKwREzrv6KQnOBmu6mrkbq34RCemxeUOWN3fyGs8RO2SCql13hP-CzON57Dpc=m37',
          'https://lh3.googleusercontent.com/ydl2J2E6-rMAz5opzVzVeNptH530QDBjYBYLlUEmzBqt75yJ3zJ33x7HW0kHAcTtHjXnFJ1bl-UQsQtqdHYj_t4TBIssfdjFiybD3Z2y8H6lwQepFAphx8wkHCOWwUJkdDQWYt01_XU=m37'
          ],
          msry: null,
          msry2: null,
          msry3: null,
          earthImg:['wt3.jpg','wt4.jpg','wt5.jpg','wt6.jpg','wt6-2.jpg','wt7.jpg','wt10.jpg','wt11.jpg'],
          historicalImages: []
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
            gutter: 5
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
</style>
