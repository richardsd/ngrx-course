import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course } from "../model/course";
import { compareCourses } from '../model/course';
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";


export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}


export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  // selectId: 'courseId' - if the id is not in the default id property
});

export const initialState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialState, 
  on(CourseActions.allCoursesLoaded,
    (state, action) => 
    adapter.addMany(action.courses, {...state, allCoursesLoaded: true} )),
  on(CourseActions.courseUpdated,
    (state, action) => adapter.updateOne(action.update, state))
);

export const {
  selectAll
} = adapter.getSelectors();