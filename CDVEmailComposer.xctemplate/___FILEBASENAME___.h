//
//  EmailComposer.h
//  Created by Jesse MacFadyen on 10-04-05.
//  Copyright 2010 Nitobi. All rights reserved.
//
//  ___FILEBASENAME___
//  CDVEmailComposer Template Created Jan 7 2013
//  Copyright 2013 @RandyMcMillan

#import <Foundation/Foundation.h>
#import <MessageUI/MFMailComposeViewController.h>
#import <Cordova/CDVPlugin.h>

@interface ___FILEBASENAME___ : CDVPlugin < MFMailComposeViewControllerDelegate > {}

- (void)showEmailComposer:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

@end
