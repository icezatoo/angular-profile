export interface Profile {
  overview?: Overview;
  experience?: Experience[];
  projects?: Project[];
}

export interface Project {
  id?: string;
  linkimage?: string;
  state?: string;
}

export interface Experience {
  id?: string;
  title?: string;
  linkimage?: string;
  timeperiod?: string;
  description?: string;
  link?: string;
  state?: string;
}

export interface Overview {
  name?: string;
  description?: string;
  link?: string;
}
