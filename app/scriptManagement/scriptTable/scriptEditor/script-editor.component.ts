import {Component} from "@angular/core";
import {Codemirror} from 'ng2-codemirror';
import 'codemirror/mode/javascript/javascript';

/**
 * Created by yxin on 8/18/2016.
 */
@Component({
  moduleId: module.id,
  selector: 'script-editor',
  pipes: [],
  // providers: [ScriptTableService],
  directives: [Codemirror],
  // styleUrls: ['./script-upload-form.component.css'],
  templateUrl: './script-editor.component.html'
})
export class ScriptEditorComponent{
  private code:string;
  // Configuration object
  config = {
    lineNumbers: true,
    mode: {
      name: 'javascript',
      json: true
    }
  };

  constructor(){
    this.code = `// Some js code...
if (true) {
  console.log('hello world');
}
`;
  }

}
