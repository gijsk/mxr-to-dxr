# mxr-to-dxr

Web Extension for Firefox that rewrites MXR links to DXR, including `rev` and `mark` query parameters.
Note that because of the way DXR works, MXR URLs that look like: `...?mark=5-10#0` will get rewritten
to `#5-10`, that is, it is not possible to keep both the hash and the marking.
