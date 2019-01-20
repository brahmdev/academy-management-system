<template>
  <div class="dashboard">
    <Row :gutter="16">
      Dashboard page
    </Row>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data () {
    return {
      dataUserPreview: {
        brief: {
          photo: require('@/assets/img/photo.jpg'),
          name: 'Angla Cool',
          role: 'Administrator'
        },
        property: [
          {
            icon: 'fa fa-user',
            key: 'Sex',
            value: 'M'
          },
          {
            icon: 'fa fa-heart',
            key: 'Activity',
            value: '9.8'
          },
          {
            icon: 'fa fa-calendar',
            key: 'Register',
            value: '2017-8-9 8:00'
          },
          {
            icon: 'fa fa-calendar',
            key: 'Latest Login',
            value: '2017-9-9 9:10'
          }
        ]
      },
      dataProgress: [
        {
          name: 'Jesse Luo',
          tags: ['cool', 'funy'],
          value: 90
        },
        {
          name: 'Angla Cool',
          tags: ['nice', 'sexy', 'literature'],
          value: 30
        },
        {
          name: 'lele Wang',
          tags: ['mould', 'shy'],
          value: 80
        },
        {
          name: 'Jesse Ca',
          tags: ['funny', 'hardworking', 'learnd'],
          value: 20
        },
        {
          name: 'Jesse Lee',
          tags: ['nice', 'mould'],
          value: 100
        }
      ],
      dataTimeline: [
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        },
        {
          date: '2017-7-15',
          time: '8:35 am',
          content: 'Lorem ipsum dolor sit amet consiquest dio'
        }
      ],
      dataWeather: {
        location: 'Beijing',
        weather: 'cloudy',
        temprature: '30°',
        humidity: '56%',
        percip: '1.50in',
        winds: '10mph'
      }
    }
  }
}
</script>

<style lang="less">
  
</style>
