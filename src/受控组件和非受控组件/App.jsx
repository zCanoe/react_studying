import React, {Component, createRef, PureComponent} from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
    this.state = {
      username: '',
      pwd: '',
      isAgree: false,
      hobbies: [
        {name: 'a', text: '唱', checked: false},
        {name: 'b', text: '跳', checked: false},
        {name: 'c', text: 'rap', checked: false},
      ],
      fruit: [],
      intro: "saa"
    }
  }

  componentDidMount() {
    this.inputRef.current.addEventListener("input", (e) => { console.log(e); })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.state, this.inputRef.current.value);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handelIsAgreeChange(e) {
    this.setState({
      isAgree: e.target.checked
    })
  }

  handleHobbiesChange(e, index) {
    this.state.hobbies[index].checked = e.target.checked;

    this.setState({
      hobbies: [... this.state.hobbies]
    })
  }

  handleFruitChange(e) {
    this.setState({
      fruit: [...e.target.selectedOptions].map(item => item.value)
    })
  }

  render() {
    const { username, pwd, isAgree,hobbies, fruit, intro } = this.state;
    return (
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <div>

            <label htmlFor={username}>
              用户
              <input type="text" id='username' name='username' value={username}
                     onChange={(e) => this.handleInputChange(e)}/>
            </label>
            <label htmlFor={pwd}>
              密码
              <input type="text" id='pwd' name='pwd' value={pwd}
                     onChange={(e) => this.handleInputChange(e)}/>
            </label>
          </div>

          {/* 单选 */}
          <div>
            <label htmlFor="isAgree">
              <input type="checkbox" checked={isAgree} onChange={(e) => this.handelIsAgreeChange(e)}/>
              是否同意
            </label>
          </div>

          {/* 多选 */}
          <div>
            <label htmlFor="hobbies">
              {
                hobbies.map((item, index) => <input key={item.name} type="checkbox" name={item.name} checked={item.checked} onChange={(e) => this.handleHobbiesChange(e, index)}/>)
              }
            </label>
          </div>

          <select value={fruit} onChange={(e) => this.handleFruitChange(e)} multiple>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
          </select>

          <div>
            <input type="text" defaultValue={intro} ref={this.inputRef}/>
          </div>

          <div>
            <button type="submit">提交</button>
          </div>
        </form>
    );
  }
}

export default App;
