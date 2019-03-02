<template>
  <Form :model="model" :rules="rules" ref="form">
    <FormItem label="First name" prop="firstName">
      <Input v-model="model.firstName" placeholder="First name"/>
    </FormItem>
    <FormItem label="Last Name" prop="lastName">
      <Input v-model="model.lastName" placeholder="Last name"/>
    </FormItem>
    <FormItem label="Email" prop="email">
      <Input v-model="model.email" placeholder="Email"/>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        firstName: "",
        lastName: "",
        email: ""
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "First name is required",
            trigger: "blur"
          }
        ],
        lastName: [
          {
            required: true,
            message: "Last name is required",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Email is required",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Invalid email",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate(valid => {
          this.$emit("on-validate", valid, this.model);
          resolve(valid);
        });
      });
    }
  }
};
</script>

<style>
</style>
