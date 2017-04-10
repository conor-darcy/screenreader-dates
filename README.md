# screenreader-dates
Create screenreader friendly dates &amp; apply them to an aria-label

Checks for a 'datetime' attribute on <time> tags and converts it to a more readable format for screenreaders &amp; adds the new formatted date to an 'aria-label' attribute.

Dates in 'datetime' attribute should be in ISO standard format.

**For example:**
```
<time datetime="2017-04-05">4/5/2017</time>
```
is converted to
```
<time datetime="2017-04-05" aria-label="Wednesday, April Fifth, 2017.">4/5/2017</time>
```

Screenreader users should hear **'Wednesday, April Fifth, two zero one seven'** instead of **'four slash five slash two zero one seven'**.


## Installation.

$ bower install screenreader-dates

## Usage.

- You must use a 'time' element
- Date must be in ISO format. Eg. 2017-04-07 for April 7th, 2017
- Date must be in a 'datetime' attribute

## Limitations/Potential features

- No configuration, it does what it does.
- Applies the aria-label to all time elements with a datetime attribute automatically. You cant choose which elements are included.
- Doesn't handle time (hours, minutes & seconds).
- Year is read out as digits, eg. 2017 is read as 'two zero one seven' & not 'twenty seventeen'.
- Always adds the week day, you cant turn this of.
- No localisation, english only.
