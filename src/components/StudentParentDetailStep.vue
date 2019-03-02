<template>
  <Form :model="model" :rules="rules" ref="form">
    <FormItem label="Website" prop="website">
      <Input type="url" v-model="model.website" placeholder="Website"/>
    </FormItem>
    <FormItem label="Language" prop="language">
      <Select v-model="model.language">
        <Option
          v-for="lang in languageOptions"
          :key="lang.value"
          :label="lang.label"
          :value="lang.value"
        ></Option>
      </Select>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        language: "",
        website: ""
      },
      languageOptions: [
        { value: "", label: "- language -" },
        { value: "ms", label: "Bahasa Melayu" },
        { value: "ca", label: "Català" },
        { value: "da", label: "Dansk" },
        { value: "de", label: "Deutsch" },
        { value: "en", label: "English" },
        { value: "es", label: "Español" },
        { value: "el", label: "Eλληνικά" },
        { value: "fr", label: "Français" },
        { value: "it", label: "Italiano" },
        { value: "hu", label: "Magyar" },
        { value: "nl", label: "Nederlands" },
        { value: "no", label: "Norsk" },
        { value: "pl", label: "Polski" },
        { value: "pt", label: "Português" },
        { value: "fi", label: "Suomi" },
        { value: "sv", label: "Svenska" },
        { value: "tr", label: "Türkçe" },
        { value: "is", label: "Íslenska" },
        { value: "cs", label: "Čeština" },
        { value: "ru", label: "Русский" },
        { value: "th", label: "ภาษาไทย" },
        { value: "zh", label: "中文 (简体)" },
        { value: "zh-TW", label: "中文 (繁體)" },
        { value: "ja", label: "日本語" },
        { value: "ko", label: "한국어" }
      ],
      rules: {
        language: [
          {
            required: true,
            message: "Language name is required",
            trigger: "change"
          }
        ],
        website: [
          {
            required: true,
            message: "Website is required",
            trigger: "blur"
          },
          {
            type: "url",
            message: "Invalid url",
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
