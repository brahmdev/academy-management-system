<template>
  <div class="home">
    <Row class="header" type="flex" align="middle">
      <!--<div class="logo">
        <img src="../assets/img/logo.png" height="30" alt="">
        <span>ACADEMY</span>-MANAGER <Tag>beta</Tag>
      </div>-->
      <Dropdown class="login-info" placement="bottom-end">
        <Button type="ghost">
            <img src="../assets/img/photo.jpg" height="30" alt="">Admin
            <Icon type="arrow-down-b"></Icon>
        </Button> 
        <Dropdown-menu slot="list">
            <Dropdown-item divided><i class="fa fa-cog"></i>Settings</Dropdown-item>
            <Dropdown-item divided><i class="fa fa-key"></i>Log out</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </Row>   
    <div class="sidebar">
      <Menu theme="dark" width="100%" class="menu" :active-name="activeName" :accordion="true">
          <Menu-item name="Dashboard">
              <router-link to="/">
                <img src="../assets/logo.png" height="30" alt="">
                Dashboard  
              </router-link>
          </Menu-item>
          <Submenu name="Admission">
              <template slot="title">
                  <i class="fas fa-plus"></i>
                  Admission
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Attendance">
              <template slot="title">
                  <i class="far fa-address-card"></i>
                  Attendance
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Fee">
              <template slot="title">
                  <i class="far fa-money-bill-alt"></i>
                  Fee
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Student">
              <template slot="title">
                  <i class="fas fa-user-graduate"></i>
                  Student
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Accounts">
              <template slot="title">
                  <i class="fas fa-calculator"></i>
                  Accounts
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Reports">
              <template slot="title">
                  <i class="fas fa-table"></i>
                  Reports
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Examination">
              <template slot="title">
                  <i class="fas fa-award"></i>
                  Examination
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Employees">
              <template slot="title">
                  <i class="fas fa-user-tie"></i>
                  Employees
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Classes">
              <template slot="title">
                  <i class="fas fa-school"></i>
                  Classes
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Seetings">
              <template slot="title">
                  <i class="fas fa-cogs"></i>
                  Settings
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
          <Submenu name="Users">
              <template slot="title">
                  <i class="fas fa-users"></i>
                  Users
              </template>
              <Menu-item name="Sub Task 1">
                <router-link to="/basic-table">
                  Sub Task 1 
                </router-link>
              </Menu-item>
              <Menu-item name="Sub Task 2">
                <router-link to="/editable-table">
                  Sub Task 2 
                </router-link>
              </Menu-item>
          </Submenu>
      </Menu>
    </div>
    <div class="main-content">
      <router-view></router-view> 
      <p class="vm-author">vue-manager maintained by <a href="https://github.com/brahmdev/" target="_blank">Brahmdev Pandey</a></p> 
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  mounted: function () {
    this.activeName = this.$route.name
  },
  data () {
    return {
      activeName: 'Dashboard',
      msgPushData: [
        {
          image: require('@/assets/img/photo.jpg'),
          from: 'JesseLuo',
          time: '2017-1-8',
          message: 'I like your website very much!'
        },
        {
          image: require('@/assets/img/photo.jpg'),
          from: 'JesseLuo',
          time: '2017-1-8',
          message: 'I like your website very much!'
        },
        {
          image: require('@/assets/img/photo.jpg'),
          from: 'JesseLuo',
          time: '2017-1-8',
          message: 'I like your website very much!'
        },
        {
          image: require('@/assets/img/photo.jpg'),
          from: 'JesseLuo',
          time: '2017-1-8',
          message: 'I like your website very much!'
        },
        {
          image: require('@/assets/img/photo.jpg'),
          from: 'JesseLuo',
          time: '2017-1-8',
          message: 'I like your website very much!'
        }
      ]
    }
  }
}
</script>
