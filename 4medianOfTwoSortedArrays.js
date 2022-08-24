var findMedianSortedArrays = function (nums1, nums2) {
  var arrayConcat = nums1.concat(nums2);
  var arrayConcatSort = arrayConcat.sort(function (a, b) {
    return a - b;
  });
  if (arrayConcatSort.length % 2 == 1) {
    return arrayConcatSort[arrayConcatSort.length / 2 - 0.5];
  } else {
    return (
      (arrayConcatSort[arrayConcatSort.length / 2] +
        arrayConcatSort[arrayConcatSort.length / 2 - 1]) /
      2
    );
  }
};
