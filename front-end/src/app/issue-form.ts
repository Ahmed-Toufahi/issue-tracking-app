import { FormControl } from "@angular/forms";

export interface IssueForm {
    title: FormControl<String>;
    description: FormControl<String>;
    priority: FormControl<String>;
    type: FormControl<String>;
}
