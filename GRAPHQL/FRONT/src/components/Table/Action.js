class Action {
  constructor(show, edit, remove) {
    this.init()

    if (show) {
      try {
        this.show = this.validate(show)
      } catch (e) {
        console.error(e)
      }
    }

    if (edit) {
      try {
        this.edit = this.validate(edit)
      } catch (e) {
        console.error(e)
      }
    }

    if (remove) {
      try {
        this.remove = this.validate(remove)
      } catch (e) {
        console.error(e)
      }
    }
  }

  init () {
    this.show = {}
    this.edit = {}
    this.remove = {}
  }

  validate (action) {
    if (!action.name || action.name === 'undefined') {
      throw "Invalid object action : name is not defined";
    }

    if (!action.params || action.params === 'undefined') {
      throw "Invalid object action : params is not defined";
    }

    return action
  }
}

export default Action
