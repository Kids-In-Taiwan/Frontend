<template>
  <div class="datamanage">
    <v-card flat style="background-color:rgba(255, 255, 255, 0.0);">
        <v-card-text>
        <v-text-field
            label="關鍵字搜尋-資料名稱"
            v-model.trim="input_data.keyword"
            prepend-inner-icon="mdi-magnify"
            ></v-text-field> <!-- 關鍵字輸入 -->
        <v-col
            class="d-flex"
            cols="12"
        >
            <v-select
                :items="groupofData"
                label="月齡組"
                v-model="input_data.group"
            ></v-select>
            <v-select
                :items="monthofData"
                label="波次/月齡"
                v-model="input_data.month"
            ></v-select>
            <v-select
                :items="typeofData"
                label="問卷類型"
                v-model="input_data.type"
            ></v-select>
            <v-select
                :items="releaseState"
                label="釋出狀態"
                v-model="input_data.state"
            ></v-select>
        </v-col>
        <p>
            搜尋狀態: {{ input_data.group }} >>
                    {{ input_data.month }} >>
                    {{ input_data.type }} >>
                    {{ input_data.state }}
                    {{ input_data.keyword.length ?  '>> ': ''}}
                    {{ input_data.keyword }}
        </p>
        <v-data-table
            :headers="headers"
            :items="titleMenuData"
            :items-per-page="5"
            sort-by="title"
            style="background-color:rgba(255, 255, 255, 0.4);"
            class="elevation-1"
        >
            <template v-slot:top>
            <v-toolbar flat>
                  <v-toolbar-title>問卷資料</v-toolbar-title>
                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>

                  <v-dialog
                    v-model="dialog"
                    max-width="500px"
                  >
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">問卷釋出</span>
                      </v-card-title>

                      <v-card-text>
                        <v-text-field
                          v-model="editedItem.title"
                          label="帳戶名稱"
                          readonly
                        ></v-text-field>
                        <v-switch
                          v-model="editedItem.state"
                          flat
                          :label="`${editedItem.state==1 ? '已釋出':'未釋出'}`"
                        ></v-switch>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="close"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="save"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.state="{ item }">
                {{ item.state?'已釋出':'未釋出' }}
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn text @click="editItem(item)">
                  <v-icon left>mdi-pencil</v-icon>編輯
                </v-btn>
              </template>
            </v-data-table>
        </v-card-text>
    </v-card>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script>
import axios from 'axios'
export default {
  name: 'DataManage',
  data () {
    return {
      dialog: false,
      menuData: [],
      input_data: {
        group: '全部',
        month: '全部',
        type: '全部',
        state: '全部',
        keyword: ''
      },
      groupofData: ['全部','大月齡組','小月齡組'],
      monthofData: ['全部','M3','M6','M12', 'M18', 'M24','M36','M48','M60','M72','G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','G11','G12'],
      typeofData: ['全部','家長','親友','教保/教師'],
      releaseState: ['全部','已釋出','未釋出'],
      headers: [
        {
            text: '問卷名稱',
            align: 'start',
            sortable: false,
            value: 'title',
        },
        { text: '釋出狀態', value: 'state' },
        { text: '', value: 'actions', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        id: '',
        title: '',
        group: '',
        month: '',
        type: '',
        state: '',
      },
      defaultItem: {
        id: '',
        title: '',
        group: '',
        month: '',
        type: '',
        state: '',
      }
    }
  },
  computed: {
    typeMenuDataForGroup(){
        if(this.input_data.group === '全部'){
            return this.menuData
        }else{
            return this.menuData.filter(item =>{
                return item.group === this.input_data.group
            })
        }
    },
    typeMenuDataForMonth(){
        if(this.input_data.month === '全部'){
            return this.typeMenuDataForGroup
        }else{
            return this.typeMenuDataForGroup.filter(item =>{
                return item.month === this.input_data.month
            })
        }
    },
    typeMenuDataForType(){
        if(this.input_data.type === '全部'){
            return this.typeMenuDataForMonth
        }else{
            return this.typeMenuDataForMonth.filter(item =>{
                return item.type === this.input_data.type
            })
        }
    },
    typeMenuDataForState(){
        if(this.input_data.state === '全部'){
            return this.typeMenuDataForType
        }else if(this.input_data.state === '已釋出'){
            return this.typeMenuDataForType.filter(item =>{
                return item.state;
            })
        }else{
            return this.typeMenuDataForType.filter(item =>{
                return !item.state;
            })
        }
    },
    titleMenuData(){
        if(this.input_data.keyword){
            return this.typeMenuDataForState.filter(item =>{
                return (
                    item.title.toLowerCase().indexOf
                        (this.input_data.keyword.toLowerCase())!==-1
                    )
            })
        }else{
            return this.typeMenuDataForState
        }
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {
    editItem (item) {
      this.editedIndex = this.menuData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      Object.assign(this.menuData[this.editedIndex], this.editedItem)
      let data={
        DataId: this.editedItem.id,
        Release: (this.editedItem.state) ? 1 : 0
      }
      // console.log(data)
      axios.put('/api/adminApp/release',data) // .catch((err)=>{console.err(err)})
      this.close()
    },
  },
  mounted () {
    axios.get('/api/adminApp/auth',{
      params: { auth: 'All_data' }
    }).then((res) => {
      let tmp_group=['小月齡組','大月齡組']
      let tmp_type=['教保/教師','家長','親友']
      for(let i=0;i<res.data.data.length;i++){
        let str='KIT'
        str+= (res.data.data[i].age_type==1) ? '3月齡組' : '36月齡組'
        let item={
          id: res.data.data[i].survey_id,
          title: str+res.data.data[i].wave+tmp_type[res.data.data[i].survey_type-1],
          group: tmp_group[res.data.data[i].age_type-1],
          month: res.data.data[i].wave,
          type: tmp_type[res.data.data[i].survey_type-1],
          state: res.data.data[i].release
        }
        this.menuData.push(item)
      }
    }) //.catch((err)=>{console.err(err)})
  }
}
</script>
