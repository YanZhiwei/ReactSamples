import React, { Component } from 'react'

export default class FormSample1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'yanzhiwei',
            gender: 'M',
            introduction: '',
            lists: [{ id: '01', listName: 'C#', check: false },
            { id: '02', listName: 'React', check: false },
            { id: '03', listName: 'Java', check: true }]
        }
        this.filebox = React.createRef()
    }
    formChange = (event) => {
        let changeName = event.target.name;
        console.log(changeName);
        this.setState({ [changeName]: event.target.value })
    }
    checkChange = (index) => {
        let arrLists = this.state.lists;
        if (arrLists[index].check)
            arrLists[index].check = false;
        else
            arrLists[index].check = true;
        this.setState({ lists: arrLists });
        console.log("checkChange|index:" + index);
    }
    formSubmit = (event) => {
        console.log("formSubmit|name:" + this.state.name);
        console.log("formSubmit|gender:" + this.state.gender);
        console.log("formSubmit|introduction:" + this.state.introduction);
        event.preventDefault();
    }
    render() {
        let ckLists = this.state.lists.map((item, index) => (
            <div key={item.id}>
                <input type="checkbox"
                    checked={item.check}
                    onChange={this.checkChange.bind(this, index)}
                    key={item.id} />
                <label>{item.listName}</label>
            </div>
        ));

        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <label>姓名：</label>
                        <input id="name" name="name" value={this.state.name} onChange={this.formChange} />
                    </div>

                    <div>
                        <label>性別：</label>
                        <select id="gender" name="gender"
                            value={this.state.gender}
                            onChange={this.formChange} >
                            <option value="M">男</option>
                            <option value="W">女</option>
                        </select>
                    </div>
                    <div>
                        <label>自我介紹：</label><br />
                        <textarea id="introduction" name="introduction"
                            value={this.state.introduction}
                            onChange={this.formChange}></textarea>
                        <br />
                    </div>
                    <div>
                        {ckLists}
                    </div>
                    <div>
                        <label>上传文件</label>

                        {/* 什么时候使用Refs：
                        1.管理焦点、文本选择、媒体回放
                        2.触发必要动画；
                        3.整合第三方DOM库 */}
                        <input type="file" ref={this.filebox} />
                    </div>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}
