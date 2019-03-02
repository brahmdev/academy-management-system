<template>
  <div class="home">
    <Row class="header" type="flex" align="middle">
      <div class="logo">
        <img src="../assets/logo.png" height="30" alt="">
        <span>ACADEMY</span>-MANAGER <Tag>beta</Tag>
      </div>
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
      <div class="hide-scroll">
        <div class="viewport">
          <Menu theme="dark" width="100%" class="menu" :active-name="activeName" :accordion="false">
              <Menu-item name="Dashboard">
                  <router-link to="/">
                      <i class="fas fa-tachometer-alt"></i>
                      Dashboard  
                  </router-link>
              </Menu-item>
              <Submenu name="Admission">
                  <template slot="title">
                      <i class="fas fa-plus"></i>
                      Admission
                  </template>
                  <Menu-item name="Student">
                    <router-link to="/addStudent">
                      <i class="fas fa-plus"></i>Student
                    </router-link>
                  </Menu-item>
                  <Menu-item name="teacher">
                    <router-link to="/basic-table">
                      <i class="fas fa-plus"></i>Teacher
                    </router-link>
                  </Menu-item>
                  <Menu-item name="non-teaching-staff">
                    <router-link to="/editable-table">
                      <i class="fas fa-plus"></i>Non-Teaching staff 
                    </router-link>
                  </Menu-item>
              </Submenu>
              <Submenu name="Academics">
                  <template slot="title">
                      <i class="fas fa-book-reader"></i>
                      Academics
                  </template>
                  <Menu-item name="Board">
                    <router-link to="/basic-table">
                      <i class="fas fa-plus"></i>Board
                    </router-link>
                  </Menu-item>
                  <Menu-item name="class">
                    <router-link to="/basic-table">
                      <i class="fas fa-plus"></i>Class/Standard
                    </router-link>
                  </Menu-item>
                  <Menu-item name="subject">
                    <router-link to="/editable-table">
                      <i class="fas fa-plus"></i>Subject
                    </router-link>
                  </Menu-item>
                  <Menu-item name="chapter">
                    <router-link to="/editable-table">
                      <i class="fas fa-plus"></i>Chapter
                    </router-link>
                  </Menu-item>
                  <Menu-item name="manage-dept">
                    <router-link to="/editable-table">
                      <i class="fas fa-plus"></i>Manage Departments
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
              <Submenu name="Attendance">
                  <template slot="title">
                      <i class="far fa-address-card"></i>
                      Attendance
                  </template>
                  <Menu-item name="daily">
                    <router-link to="/basic-table">
                      <i class="fas fa-plus"></i>Daily
                    </router-link>
                  </Menu-item>
                  <Menu-item name="monthly">
                    <router-link to="/editable-table">
                      <i class="fas fa-plus"></i>Monthly 
                    </router-link>
                  </Menu-item>
              </Submenu>
              <Submenu name="Examination">
                  <template slot="title">
                      <i class="fas fa-award"></i>
                      Examination
                  </template>
                  <Menu-item name="create-exam">
                    <router-link to="/editable-table">
                      <i class="fas fa-plus"></i>Create Exam
                    </router-link>
                  </Menu-item>
                  <Menu-item name="enter-marks">
                    <router-link to="/editable-table">
                      <i class="fas fa-plus"></i>Enter Marks
                    </router-link>
                  </Menu-item>
              </Submenu>
              <Submenu name="Employees">
                  <template slot="title">
                      <i class="fas fa-user-tie"></i>
                      Employees
                  </template>
                  <Menu-item name="teacher">
                    <router-link to="/basic-table">
                      <i class="fas fa-plus"></i>Teacher
                    </router-link>
                  </Menu-item>
                  <Menu-item name="non-teaching-staff">
                    <router-link to="/editable-table">
                      <i class="fas fa-plus"></i>Non-Teaching staff 
                    </router-link>
                  </Menu-item>
              </Submenu>
              <Menu-item name="Fee">
                  <router-link to="/">
                      <i class="far fa-money-bill-alt"></i>
                      Fee  
                  </router-link>
              </Menu-item>
              <Submenu name="Reports">
                  <template slot="title">
                      <i class="fas fa-table"></i>
                      Reports
                  </template>
                  <Menu-item name="Student_Report">
                      <router-link to="/basic-table">
                        <i class="fas fa-user-graduate"></i>
                        Attendance 
                      </router-link>
                    </Menu-item>
                    <Menu-item name="Sub Task 2">
                      <router-link to="/editable-table">
                        <i class="fas fa-user-tie"></i>
                        Result 
                      </router-link>
                    </Menu-item>
              </Submenu>
              <Menu-item name="Student">
                  <router-link to="/">
                      <i class="fas fa-user-graduate"></i>
                      Student  
                  </router-link>
              </Menu-item>
              <Menu-item name="Settings">
                  <router-link to="/">
                      <i class="fa fa-cogs"></i>
                      Settings  
                  </router-link>
              </Menu-item>
              <Submenu name="TimeTable">
                  <template slot="title">
                      <i class="fas fa-clock"></i>
                      TimeTable
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
      </div>
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
