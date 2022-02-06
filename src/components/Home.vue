<template>
  <div>
    <div class="flex-column d-flex container">
      <div class="row button">
        <div class="col">
          Showing events for {{curr_date_obj}}
        </div>
        <div class="col">
          <button type="button" class="btn add" data-toggle="modal" data-target="#addEvent">
            Add Event
          </button>
          <div class="modal fade" id="addEvent" tabindex="-1" role="dialog">
            <app-add-event :col_header_list="col_header_list"></app-add-event>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <app-scheduler :col_header_list="col_header_list"></app-scheduler>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //Variables go here
      col_header_list: ['Track1', 'Track2', 'Track3', 'Track4', 
                        'Track5', 'Track6', 'Track7', 'Track8'],
      curr_date_obj: {}
    }
  },
  methods: {
    gen_curr_date(){
      let today = new Date();
      let month = today.getMonth() + 1 //mm
      let day = today.getDate() // dd
      let year = today.getFullYear() // yyyy
      if(day < 10) day = '0' + day
      if(month < 10) month = '0' + month
      this.curr_date_obj.date = year + '-' + month + '-' + day
    }
  },
  mounted(){
    this.gen_curr_date();
  }
}
</script>

<style>

</style>