<template>
<div>
     <form-wizard>
            <tab-content title="Personal details"
                         icon="fa fa-user">
              <StudentDetailStep/>
            </tab-content>
            <tab-content title="Parent Detail"
                         icon="fa fa-user-tie">
              <StudentParentDetailStep/>
            </tab-content>
            <tab-content title="Payment Detail"
                         icon="fas fa-credit-card">
              <StudentParentDetailStep/>
            </tab-content>
            
            <tab-content title="Last step"
                         icon="fa fa-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
        </form-wizard>
        </div>
</template>

<script>
import StudentDetailStep from '@/components/StudentDetailStep.vue';
import StudentParentDetailStep from '@/components/StudentParentDetailStep.vue';
  export default {
    components: {
      StudentDetailStep,
      StudentParentDetailStep
    }
  }
</script>

<style scoped>

</style>
