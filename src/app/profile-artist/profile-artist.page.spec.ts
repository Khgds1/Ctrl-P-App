import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArtistPage } from './profile-artist.page';

describe('ProfileArtistPage', () => {
  let component: ProfileArtistPage;
  let fixture: ComponentFixture<ProfileArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileArtistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
