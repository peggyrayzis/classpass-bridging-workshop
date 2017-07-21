//  Created by react-native-create-bridge
#import <Foundation/Foundation.h>
#import "CPView.h"

// import RCTEventDispatcher
#if __has_include(<React/RCTEventDispatcher.h>)
#import <React/RCTEventDispatcher.h>
#elif __has_include(“RCTEventDispatcher.h”)
#import “RCTEventDispatcher.h”
#else
#import “React/RCTEventDispatcher.h” // Required when used as a Pod in a Swift project
#endif


@implementation CPView : UIView  {

  RCTEventDispatcher *_eventDispatcher;
  UIView *_childView;
  
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super init])) {
    _eventDispatcher = eventDispatcher;
    _childView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 100, 100)];
    _childView.backgroundColor = [UIColor blueColor];
  }
    
  return self;
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  _childView.frame = self.bounds;
  [self addSubview:_childView];
}

- (void)setExampleProp:(NSString *)exampleProp
{
  if (![exampleProp isEqual:_exampleProp]) {
    _exampleProp = [exampleProp copy];
    [self addTextView:_exampleProp];
  }
}

- (void)addTextView:(NSString *)text
{
  UILabel *textLabel = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 100, 100)];
  textLabel.text = text;
  textLabel.textColor = [UIColor whiteColor];
  [textLabel sizeToFit];
  [_childView addSubview:textLabel];
  [_childView setNeedsDisplay];
}

@end
