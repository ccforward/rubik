<template>
  <article>
    <h1>文件上传 File</h1>

    
    <h3>单个文件</h3>
    <r-file v-model="file" placeholder="选择文件"></r-file>
    <div class="file-info" v-if="file.length">
      <p>文件信息</p>
      <table class="centered responsive-table">
        <thead>
          <tr>
              <th>name</th>
              <th>lastModified</th>
              <th>lastModifiedDate</th>
              <th>size</th>
              <th>type</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{file[0].name}}</td>
            <td>{{file[0].lastModified}}</td>
            <td>{{file[0].lastModifiedDate}}</td>
            <td>{{file[0].size}}</td>
            <td>{{file[0].type}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>选择多个文件</h3>
    <r-file v-model="files" placeholder="选择一个或多个文件" multiple></r-file>
    <div class="file-info" v-if="files.length">
      <p>选择的文件信息</p>
      <table class="centered responsive-table">
        <thead>
          <tr>
              <th>#</th>
              <th>name</th>
              <th>lastModified</th>
              <th>lastModifiedDate</th>
              <th>size</th>
              <th>type</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, idx) in files.length">
            <td>文件{{item}}</td>
            <td>{{files[idx].name}}</td>
            <td>{{files[idx].lastModified}}</td>
            <td>{{files[idx].lastModifiedDate}}</td>
            <td>{{files[idx].size}}</td>
            <td>{{files[idx].type}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Disabled</h3>
    <r-file disabled placeholder="不能上传文件"></r-file>


    <h2>API</h2>

    <h3>props</h3>

    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>input[type=file] name 属性</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>input[type=file] 是否可用</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>是否可以选择多个文件</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>v-model 指令</td>
          <td>和 input[type=file] 的 value 双向绑定</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody> 
    </table>


    <Markup :lang="'html'">
      &lt;r-file v-model="file" placeholder="选择文件"&gt;&lt;/r-file&gt;
      &lt;r-file v-model="files" placeholder="选择一个或多个文件" multiple&gt;&lt;/r-file&gt;
      &lt;r-file disabled placeholder="不能上传文件"&gt;&lt;/r-file&gt;
    </Markup>
    
  </article>
</template>

<script>
export default {
  name: 'files',
  data(){
    return {
      file: {},
      files: {},
    }
  }
}
</script>

<style lang="stylus" scoped>
  h3 {
    margin 2rem 0
  }
  .file-info {
    p {
      margin-top 2rem
      font-size 1.3rem
    }
  }
</style>
