# Best Image

Deterministically choose the best image from an array of images.

## Summary

Goal of this project is to abstract the logic and mechanism of programatically
chosing the most appropriate image given a target and an array of images by
comparing the properties of one image against the properties of a following
image within an array. The winner will then be selected to be compare to the
next image within the array until all images of the array have been iterated
over.

## Concepts

This is an early project so ideas may change and things may be renamed, but
the core concepts should be reasonably stable.

### Target

A "target" is a set of attributes that describe what the best image would be
for a given use case. Currently "width" and "height", but in the future it
could be anything such as the target luminance, color average, or any other
property that could be described in terms of best case / worst case percentages.

### MatchBy

A "matchBy" is a collection of "matchers" that can return the averaged score
from the percentage score returned from each "matcher". The idea here is to
create a score card for different criteria such as the "best-thumbnail" image,
"best-banner" image, or "best-veritcal" image.

### Matcher

A "matcher" is a method of providing a score of a single attribute that can be
described in terms of best-case match (100%) and worst-case match (0%.) The
idea is to focus on the method of determining of a single property and
normalizing the output as a percentage value.


## Matchers

A list of provided matchers:

- [orientationMatch](#orientationMatch)
- [ratioMatch](#ratioMatch)
- [scaleToContainMatch](#scaleToContainMatch)
- [scaleToCoverMatch](#scaleToCoverMatch)

### orientationMatch

### ratioMatch

### scaleToContainMatch

### scaleToCoverMatch

## Caveats

This algorithm chooses the "best" image from a list of images. The first image
in the array is assumed to be the de facto "best" image. It may be surprising
if an impractical image is selected in some scenarios.

### Array order is important

This algorithm assumes that the best image must be "better" than the previously
selected image. If the images being compared have the "same" score then the
previous selection shall remain the "best" image.

### Best of the worst

This algorithm assumes there only valid images in the array to select from. If
an obviously poor image has been selected with a 0% match and is compared to
another image whose score is not better than a 0% match then the "best" image
may appear to be a silly and arbitrary selection. To prevent these kinds of
surprises, the array of images should be pre-filtered to remove any unqualified
choices.
